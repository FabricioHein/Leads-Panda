<template>
    <div class="account-settings-footer">
        <div class="as-footer-container">
            <button type="button" class="btn btn-success">{{ title }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        title: {
            type: String
        }


    }

}
</script>