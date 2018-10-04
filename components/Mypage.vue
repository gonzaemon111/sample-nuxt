<template>
<div id="mypage">
  <span>こんにちは, {{ user.displayName }}さん</span>
  <p><textarea v-model="note_content"></textarea></p>
  <p><button @click="saveContent(note_content)">ノートを保存する</button></p>
  <button @click="logout">ログアウト</button>
</div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'mypage',
  props: ['user'],
  data (context) {
    // コンポーネントをロードする前に毎回呼び出されます
     return { note_content: 'h'}
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
}
</script>
