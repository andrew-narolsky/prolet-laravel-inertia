<template>
    <section class="template-cards">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <Link :href="route('users.index')" class="btn btn-outline-success">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Список користувачів
                </Link>
            </div>
        </div>
        <div class="card card-primary mt-4">
            <form @submit.prevent="update">
                <div class="card-body">
                    <div class="form-group">
                        <label for="name">Логін</label>
                        <input :class="{'is-invalid': form.errors.login}" v-model="form.login" type="text" class="form-control" id="login" placeholder="Логін">
                        <div class="text-danger small">{{ form.errors.login }}</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Ім'я</label>
                        <input :class="{'is-invalid': form.errors.name}" v-model="form.name" type="text" class="form-control" id="name" placeholder="Ім'я">
                        <div class="text-danger small">{{ form.errors.name }}</div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input :class="{'is-invalid': form.errors.email}" v-model="form.email" type="email" class="form-control" id="email" placeholder="Email">
                        <div class="text-danger small">{{ form.errors.email }}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон</label>
                        <input :class="{'is-invalid': form.errors.phone}" v-model="form.phone" type="text" class="form-control" id="phone" placeholder="Телефон">
                        <div class="text-danger small">{{ form.errors.phone }}</div>
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input :class="{'is-invalid': form.errors.password}" v-model="form.password" type="password" class="form-control" id="password" placeholder="Пароль">
                        <div class="text-danger small">{{ form.errors.password }}</div>
                    </div>
                </div>
                <div class="card-footer">
                    <button :disabled="form.processing" type="submit" class="btn btn-primary">Змінити</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { Link, useForm } from '@inertiajs/vue3'
import AdminLayout from '../../../Shared/Admin/Layout.vue'
export default {
    components: {
        Link
    },
    layout: AdminLayout,
    props: {
        user: Object,
    },
    setup(props) {
        const form = useForm({
            login: props.user.login,
            name: props.user.name,
            email: props.user.email,
            phone: props.user.phone,
            password: null,
        })
        function update() {
            form.put(route('users.update', props.user.id))
        }
        return { form, update }
    }
}
</script>
