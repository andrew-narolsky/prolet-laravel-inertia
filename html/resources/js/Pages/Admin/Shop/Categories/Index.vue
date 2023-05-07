<template>
    <section class="template-cards">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <Link :href="route('categories.create')" class="btn btn-success">
                    <i class="fa fa-plus" aria-hidden="true"></i> Добавити категорію
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
        <div class="card mt-4" v-if="categories.length > 0">
            <div class="card-body p-0">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th style="width: 50px">#</th>
                            <th>Найменування</th>
                            <th>Батьківська категорія</th>
                            <th style="width: 210px">Дія</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories" :key="category.id">
                            <td>{{ category.id }}.</td>
                            <td>{{ category.name }}</td>
                            <td>{{ category.parent ? category.parent.name : '-' }}</td>
                            <td class="d-flex justify-content-between">
                                <Link
                                    class="btn btn-default btn-sm"
                                    :href="route('categories.edit', category.id)"
                                >Редагувати</Link>
                                <a @click="destroy(category.id)" class="btn btn-danger btn-sm">Видалити</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import AdminLayout from '../../../../Shared/Admin/Layout.vue'
export default {
    components: {
        Link
    },
    props: {
        categories: Object,
    },
    layout: AdminLayout,
    methods: {
        destroy(id) {
            if(confirm('Ви впевненні?')) {
                this.$inertia.delete(this.route('categories.destroy', id))
            }
        }
    }
}
</script>
