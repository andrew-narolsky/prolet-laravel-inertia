<template>
    <section class="template-cards">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <Link :href="route('categories.index')" class="btn btn-outline-success">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Список категорій
                </Link>
            </div>
        </div>
        <div class="card card-primary mt-4">
            <form @submit.prevent="store">
                <div class="card-body">
                    <div class="form-group">
                        <label for="name">Найменування</label>
                        <input :class="{'is-invalid': form.errors.name}" v-model="form.name" type="text" class="form-control" id="name" placeholder="Найменування">
                        <div class="text-danger small">{{ form.errors.name }}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Головна категорія</label>
                        <select name="parent_id" class="form-control">
                            <option value="0">Без головної категорії</option>
                            <Option v-for="category in categories" :category="category" :depth="depth" />
                        </select>
                    </div>
                    <Translation :languages="languages" :form="form" :tiniMSEApiKey="tiniMSEApiKey" />
                </div>
                <div class="card-footer">
                    <button :disabled="form.processing" type="submit" class="btn btn-primary">Зберегти</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '../../../../Shared/Admin/Layout.vue'
import Option from './Option.vue'
import Translation from '../../../../Shared/Translation.vue';
export default {
    components: {
        Link,
        Option,
        Translation
    },
    props: {
        categories: Object,
        languages: Object,
        depth: String,
        tiniMSEApiKey: String
    },
    layout: AdminLayout,
    setup() {
        const form = useForm({
            name: null,
            languages: {
                seo_h1 : {},
                text : {},
                seo_title : {},
                seo_description : {}
            }
        })
        function store() {
            console.log(form)
            // form.post(route('categories.store'))
        }
        return { form, store }
    }
}
</script>
