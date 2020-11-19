<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="50"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>
        <v-btn color="primary" v-on:click="pushBtn">Push</v-btn>
        <v-card class="ma-3 " v-for="item in receiveMsg" :key="item.id">
          <v-card-text>
            {{ item.message }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/messaging";
import firebaseConfig from "../constants/firebaseConfig";
import secrets from "../constants/secrets";

firebase.initializeApp(firebaseConfig);

// create FCM service
const messaging = firebase.messaging();

export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {
      receiveMsg: [
        {
          id: this.recvKey,
          message:
            "ToDo:ここに通知メッセージを表示したい（現在はコンソールログ）"
        }
      ],
      recvKey: 0
    };
  },
  methods: {
    // 調査中、onMessage()に割り当てられない
    updateData: function(adddata) {
      this.receiveMsg.push({
        id: this.recvKey,
        message: adddata
      });
    },
    // お試しボタン：自由にお使いください
    pushBtn: function() {
      console.log("Button Clicked recvKey:" + this.recvKey);
      this.recvKey += 1;

      this.receiveMsg.push({
        id: this.recvKey,
        message: "sample " + String(this.recvKey)
      });
    }
  },
  // メイン処理 登録トークンを発行し、Push通知受信時の動作を定義する
  created: () => {
    // set FCM authentication key
    messaging.usePublicVapidKey(secrets.VAPID);
    Notification.requestPermission()
      .then(permission => {
        console.log("Have permission ", permission);
        // Get token and regist FCM
        return messaging.getToken();
      })
      .then(currentToken => {
        if (currentToken) {
          console.log("Get token is : ", currentToken);
        } else {
          console.log("No Instance ID token available");
        }
      })
      .catch(err => {
        console.log("Error Occured ", err);
      });

    // forground receive message
    messaging.onMessage(payload => {
      // this.recvKey += 1;
      console.log("[FG]Message received : ", payload);
      let data = payload.notification.title + " " + payload.notification.body;
      console.log(data);

      // 【調査中】undefined
      // self.updateData(data);
    });

    // background receive message
    // messaging.setBackgroundMessageHandler(payload => {
    //   console.log("[BG]Message received : ", payload);
    // });
  }
};
</script>
