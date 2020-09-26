<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}
        <v-btn small color="primary" class="ml-2" @click="deleteTodo(todo.id)">
          delete
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // for Todo list
      todos: [
        { id: "1", text: "GoogleMapの表示" },
        { id: "2", text: "GoogleMapにピンを立てる" },
        { id: "3", text: "GoogleMapに数字付きピンを立てる" },
      ],
    };
  },
  methods: {
    deleteTodo: function(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: {},
};
</script>
