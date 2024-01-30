<template>
    <div id="gjs"></div>
</template>
  
<script>

export default {
    name: 'webBuilder',
    setup() {
    },
    data() {
        return {
            html: ' <div class="cls" style="box-sizing: border-box; color: red;">TEste</div>'
        }
    },   
    mounted() {
        var editor = window.grapesjs.init({
            container: '#gjs',
            storageManager: {
                id: 'gjs-',
                type: 'local',
                autosave: false,
                storeComponents: true,
                storeStyles: true,
                storeHtml: true,
                storeCss: true,
            },
            plugins: [
                'grapesjs-preset-webpage',
                'grapesjs-tui-image-editor',
                'grapesjs-preset-newsletter'
            ],
            pluginsOpts: {
                'grapesjs-preset-newsletter': {
                    // options
                },
                'grapesjs-tui-image-editor': {
                    config: {
                        includeUI: {
                            initMenu: 'filter',
                        },

                    }
                },
                'grapesjs-preset-webpage': {
                    blocksBasicOpts: {
                        blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
                        flexGrid: 1,
                    },
                    blocks: ['link-block', 'quote', 'text-basic'],
                },
            }
        });

        editor.on('update', (some, argument) => {
            this.html = editor.runCommand('gjs-get-inlined-html');
          
            console.log(this.html)
        });

        editor.addComponents(this.html);
       


    },
    created() {


    },
}



</script>
<style></style>