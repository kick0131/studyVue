<script setup lang="ts">

// 最終的にDB入出力を備えた画面にしたい


// https://ja.vuejs.org/guide/typescript/composition-api.html#typing-ref
import { ref } from 'vue';
import type { Ref } from 'vue';
let id: number = 0;


// タスク定義
// - id、タスク、完了フラグの構成
// - タスク定義は配列で用意
// - 入力用の文字列型を用意し、設定ボタン押下でタスク配列に追加
interface Task {
  id: number;
  task: string;
  completed: boolean;
}
const tasks: Ref<Array<Task>> = ref([]);
const task: Ref<string> = ref('');

// 入力値の文字列をタスク配列に追加
const addTask = () => {
  tasks.value.push({ id, task: task.value, completed: false });
  task.value = '';
  id++;
};

// 選択した削除ボタン内のid値を元に配列要素削除
const deleteTask = id => {
  const index = tasks.value.findIndex(task => task.id === id);
  tasks.value.splice(index, 1);
};
</script>

<template>
  <v-container>
    <!-- ページタイトル -->
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">ToDo Tasks</h1>
      </v-col>
    </v-row>

    <!-- 入力結果表示 -->
    <v-list-item v-for="item in tasks" :key="item.id">
      <v-row>
        <v-col cols="1" md="1" class="blue">
          <v-checkbox v-model="item.completed" />
        </v-col>
        <v-col cols="9" md="9" class="pink">
          <v-text-field>{{ item.task }}</v-text-field>
        </v-col>
        <v-col cols="2" md="2" class="green">
          <v-btn @click="deleteTask(item.id)">削除</v-btn>
        </v-col>
      </v-row>
    </v-list-item>

    <!-- 入力フォーム -->
    <v-form @submit.prevent="addTask">
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="task" />
        </v-col>
        <v-col cols="2">
          <v-btn color="success" @click="addTask">タスクを登録</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
