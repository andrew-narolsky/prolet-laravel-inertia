<template>
    <section class="template-cards">
        <div class="card card-primary">
            <form @submit.prevent="store">
                <div class="card-body">
                    <div class="form-group">
                        <label for="name">Найменування</label>
                        <input :class="{'is-invalid': form.errors.name}" v-model="form.name" type="text" class="form-control" id="name" placeholder="Найменування">
                        <div class="text-danger small">{{ form.errors.name }}</div>
                    </div>
                    <div class="form-group">
                        <label for="code">Код</label>
                        <input :class="{'is-invalid': form.errors.code}" v-model="form.code" type="text" class="form-control" id="code" placeholder="Код">
                        <div class="text-danger small">{{ form.errors.code }}</div>
                    </div>
                </div>
                <div class="card-footer">
                    <button :disabled="form.processing" type="submit" class="btn btn-primary">Зберегти</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '../../../Shared/Admin/Layout.vue'
export default {
    layout: AdminLayout,
    setup() {
        const form = useForm({
            name: null,
            code: null
        })
        function store() {
            form.post(route('languages.store'))
        }
        return { form, store }
    }
}
</script>
