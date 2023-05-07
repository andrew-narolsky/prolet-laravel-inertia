<template>
    <ul class="nav nav-tabs" role="tablist">
        <li v-for="language in languages" :key="language.id" class="nav-item">
            <a class="nav-link" :class="{'active': language.id === 1}" data-toggle="pill" :href="'#' + language.code" role="tab">{{ language.name }}</a>
        </li>
    </ul>
    <div class="tab-content">
        <div v-for="language in languages" :key="language.id" class="tab-pane fade" :class="{'active show': language.id === 1}" :id="language.code" role="tabpanel">
            <div class="form-group mt-3">
                <label>Заголовок</label>
                <input type="text" class="form-control" v-model="form.languages.seo_h1[language.code]" placeholder="Заголовок">
            </div>
            <div class="form-group mt-3">
                <label>Текстовий опис</label>
                <Editor :api-key="tiniMSEApiKey"
                    v-model="form.languages.text[language.code]"
                    :init="{
                        height: 300,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }"
                />
            </div>
            <div class="form-group mt-2">
                <label>Seo Title</label>
                <input type="text" class="form-control" v-model="form.languages.seo_title[language.code]" placeholder="Seo Title">
            </div>
            <div class="form-group mt-2">
                <label>Seo Description</label>
                <input type="text" class="form-control" v-model="form.languages.seo_description[language.code]" placeholder="Seo Description">
            </div>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    components: {
        Editor
    },
    props: {
        languages: Object,
        form: Object,
        tiniMSEApiKey: String
    }
}
</script>
