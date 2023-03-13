<template>
    <section class="template-cards">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <Link :href="route('users.create')" class="btn btn-success">
                    <i class="fa fa-plus" aria-hidden="true"></i> Добавити користувача
                </Link>
            </div>
        </div>
        <div v-if="$page.props.success" class="alert alert-success alert-dismissible mt-3">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h5><i class="icon fas fa-check"></i> Вітаю!</h5>
            {{ $page.props.success }}
        </div>
        <div v-if="$page.props.error" class="alert alert-danger alert-dismissible mt-3">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h5><i class="icon fas fa-ban"></i>  Увага!</h5>
            {{ $page.props.error }}
        </div>
        <div class="card mt-4" v-if="users.data.length > 0">
            <div class="card-body p-0">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th style="width: 50px">#</th>
                            <th>Ім'я</th>
                            <th>E-mail</th>
                            <th style="width: 210px">Дія</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users.data" :key="user.id">
                            <td>{{ user.id }}.</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td class="d-flex justify-content-between">
                                <Link
                                    class="btn btn-default btn-sm"
                                    :href="route('users.edit', user.id)"
                                >Редагувати</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                <Pagination :links="users.links" />
            </div>
        </div>
    </section>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import AdminLayout from '../../../Shared/Admin/Layout.vue'
import Pagination from '../../../Shared/Pagination.vue'
export default {
    components: {
        Link,
        Pagination
    },
    props: {
        users: Object,
    },
    layout: AdminLayout,
    setup(props) {
        console.log(props.users);
    }
}
</script>
