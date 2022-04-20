<template>
  <div class="alert alert-success">
    Merhaba
    <button @click="count++" class="btn btn-sm btn-primary">
      {{count}} kez tıklandı
    </button>

  </div>
</template>

<script>
export default {
  name: 'CountButton',
  data(){
    return{
      count:0
    }
  }
}
</script>

