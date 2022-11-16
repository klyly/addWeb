<template>
<div id ="wangeditor">
  <div ref="editorElem" style="text-align: left;"></div>
</div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "Editor",
  data(){
    return{
      editor: null,
      editorContent:''
    };
  },
  mounted() {
    this.editor=new E(this.$refs.editorElem);
    this.editor.config.onchange=this.contentChange
    this.editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'foreColor',
        'backColor',
        'link',
        'list',
        'justify',
        'quote',
        'emotion',
        'image',
        'table',
        'code',
        'undo',
        'redo'
    ];
    this.editor.create();
  },
  methods:{
    contentChange(html){
      this.editorContent=html;
      this.$emit('contentChange',this.editorContent);
    }
  }
}
</script>

<style scoped>

</style>