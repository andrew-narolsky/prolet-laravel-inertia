import { Head, Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, mergeProps, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  components: {
    Head,
    Link
  },
  props: {
    title: String,
    isHome: Boolean
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<nav class="main-header navbar navbar-expand navbar-white navbar-light"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a></li><li class="nav-item d-none d-sm-inline-block"><a href="index3.html" class="nav-link">Home</a></li><li class="nav-item d-none d-sm-inline-block"><a href="#" class="nav-link">Contact</a></li></ul><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" data-widget="navbar-search" href="#" role="button"><i class="fas fa-search"></i></a><div class="navbar-search-block"><form class="form-inline"><div class="input-group input-group-sm"><input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"><div class="input-group-append"><button class="btn btn-navbar" type="submit"><i class="fas fa-search"></i></button><button class="btn btn-navbar" type="button" data-widget="navbar-search"><i class="fas fa-times"></i></button></div></div></form></div></li><li class="nav-item dropdown"><a class="nav-link" data-toggle="dropdown" href="#"><i class="far fa-comments"></i><span class="badge badge-danger navbar-badge">3</span></a><div class="dropdown-menu dropdown-menu-lg dropdown-menu-right"><a href="#" class="dropdown-item"><div class="media"><img src="/build/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"><div class="media-body"><h3 class="dropdown-item-title"> Brad Diesel <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span></h3><p class="text-sm">Call me whenever you can...</p><p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p></div></div></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item"><div class="media"><img src="/build/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"><div class="media-body"><h3 class="dropdown-item-title"> John Pierce <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span></h3><p class="text-sm">I got your message bro</p><p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p></div></div></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item"><div class="media"><img src="/build/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"><div class="media-body"><h3 class="dropdown-item-title"> Nora Silvester <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span></h3><p class="text-sm">The subject goes here</p><p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p></div></div></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item dropdown-footer">See All Messages</a></div></li><li class="nav-item dropdown"><a class="nav-link" data-toggle="dropdown" href="#"><i class="far fa-bell"></i><span class="badge badge-warning navbar-badge">15</span></a><div class="dropdown-menu dropdown-menu-lg dropdown-menu-right"><span class="dropdown-item dropdown-header">15 Notifications</span><div class="dropdown-divider"></div><a href="#" class="dropdown-item"><i class="fas fa-envelope mr-2"></i> 4 new messages <span class="float-right text-muted text-sm">3 mins</span></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item"><i class="fas fa-users mr-2"></i> 8 friend requests <span class="float-right text-muted text-sm">12 hours</span></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item"><i class="fas fa-file mr-2"></i> 3 new reports <span class="float-right text-muted text-sm">2 days</span></a><div class="dropdown-divider"></div><a href="#" class="dropdown-item dropdown-footer">See All Notifications</a></div></li><li class="nav-item"><a class="nav-link" data-widget="fullscreen" href="#" role="button"><i class="fas fa-expand-arrows-alt"></i></a></li><li class="nav-item"><a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button"><i class="fas fa-th-large"></i></a></li></ul></nav><aside class="main-sidebar sidebar-dark-primary elevation-4"><a href="index3.html" class="brand-link"><img src="/build/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="${ssrRenderStyle({ "opacity": ".8" })}"><span class="brand-text font-weight-light">AdminLTE 3</span></a><div class="sidebar"><div class="user-panel mt-3 pb-3 mb-3 d-flex"><div class="image"><img src="/build/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"></div><div class="info"><a href="#" class="d-block">Alexander Pierce</a></div></div><div class="form-inline"><div class="input-group" data-widget="sidebar-search"><input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"><div class="input-group-append"><button class="btn btn-sidebar"><i class="fas fa-search fa-fw"></i></button></div></div></div><nav class="mt-2"><ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"><li class="nav-item"><a href="#" class="nav-link"><i class="nav-icon fas fa-language"></i><p> Мови <i class="fas fa-angle-left right"></i></p></a><ul class="nav nav-treeview"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("languages.index"),
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-list nav-icon"${_scopeId}></i><p${_scopeId}>Мови</p>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-list nav-icon" }),
          createVNode("p", null, "Мови")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("languages.create"),
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-plus nav-icon"${_scopeId}></i><p${_scopeId}>Добавити мову</p>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-plus nav-icon" }),
          createVNode("p", null, "Добавити мову")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="nav-item"><a href="#" class="nav-link"><i class="nav-icon fas fa-user"></i><p> Користувачі <i class="fas fa-angle-left right"></i></p></a><ul class="nav nav-treeview"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("users.index"),
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-list nav-icon"${_scopeId}></i><p${_scopeId}>Користувачі</p>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-list nav-icon" }),
          createVNode("p", null, "Користувачі")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("users.create"),
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-plus nav-icon"${_scopeId}></i><p${_scopeId}>Добавити користувача</p>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-plus nav-icon" }),
          createVNode("p", null, "Добавити користувача")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul></nav></div></aside><div class="content-wrapper"><div class="content-header">`);
  if (!$props.isHome) {
    _push(`<div class="container-fluid"><div class="row mb-2 d-flex justify-content-between"><h1 class="m-0">${ssrInterpolate($props.title)}</h1><ol class="breadcrumb float-sm-right"><li class="breadcrumb-item">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("admin")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Адмінпанель`);
        } else {
          return [
            createTextVNode("Адмінпанель")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="breadcrumb-item active">${ssrInterpolate($props.title)}</li></ol></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><section class="content"><div class="container-fluid">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></section></div><footer class="main-footer"><strong>Copyright © 2016-2023 <a href="https://siteforyou.org/">SiteForYou</a>.</strong> All rights reserved. </footer><aside class="control-sidebar control-sidebar-dark"></aside><!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/Layout.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  layout: AdminLayout
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-lg-3 col-6"><div class="small-box bg-info"><div class="inner"><h3>150</h3><p>New Orders</p></div><div class="icon"><i class="ion ion-bag"></i></div><a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a></div></div><div class="col-lg-3 col-6"><div class="small-box bg-success"><div class="inner"><h3>53<sup style="${ssrRenderStyle({ "font-size": "20px" })}">%</sup></h3><p>Bounce Rate</p></div><div class="icon"><i class="ion ion-stats-bars"></i></div><a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a></div></div><div class="col-lg-3 col-6"><div class="small-box bg-warning"><div class="inner"><h3>44</h3><p>User Registrations</p></div><div class="icon"><i class="ion ion-person-add"></i></div><a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a></div></div><div class="col-lg-3 col-6"><div class="small-box bg-danger"><div class="inner"><h3>65</h3><p>Unique Visitors</p></div><div class="icon"><i class="ion ion-pie-graph"></i></div><a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  components: {
    Link
  },
  layout: AdminLayout,
  setup() {
    const form = useForm({
      name: null,
      code: null
    });
    function store() {
      form.post(route("languages.store"));
    }
    return { form, store };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("languages.index"),
    class: "btn btn-outline-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-arrow-left" aria-hidden="true"${_scopeId}></i> Список мов `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-arrow-left",
            "aria-hidden": "true"
          }),
          createTextVNode(" Список мов ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="card card-primary mt-4"><form><div class="card-body"><div class="form-group"><label for="name">Найменування</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.name }, "form-control"])}"${ssrRenderAttr("value", $setup.form.name)} type="text" id="name" placeholder="Найменування"><div class="text-danger small">${ssrInterpolate($setup.form.errors.name)}</div></div><div class="form-group"><label for="code">Код</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.code }, "form-control"])}"${ssrRenderAttr("value", $setup.form.code)} type="text" id="code" placeholder="Код"><div class="text-danger small">${ssrInterpolate($setup.form.errors.code)}</div></div></div><div class="card-footer"><button${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} type="submit" class="btn btn-primary">Зберегти</button></div></form></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Language/Create.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Create$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Link
  },
  layout: AdminLayout,
  props: {
    language: Object
  },
  setup(props) {
    const form = useForm({
      name: props.language.name,
      code: props.language.code
    });
    function update() {
      form.put(route("languages.update", props.language.id));
    }
    return { form, update };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("languages.index"),
    class: "btn btn-outline-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-arrow-left" aria-hidden="true"${_scopeId}></i> Список мов `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-arrow-left",
            "aria-hidden": "true"
          }),
          createTextVNode(" Список мов ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="card card-primary mt-4"><form><div class="card-body"><div class="form-group"><label for="name">Найменування</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.name }, "form-control"])}"${ssrRenderAttr("value", $setup.form.name)} type="text" id="name" placeholder="Найменування"><div class="text-danger small">${ssrInterpolate($setup.form.errors.name)}</div></div><div class="form-group"><label for="code">Код</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.code }, "form-control"])}"${ssrRenderAttr("value", $setup.form.code)} type="text" id="code" placeholder="Код"><div class="text-danger small">${ssrInterpolate($setup.form.errors.code)}</div></div></div><div class="card-footer"><button${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} type="submit" class="btn btn-primary">Змінити</button></div></form></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Language/Edit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  components: {
    Link
  },
  props: {
    languages: Object
  },
  layout: AdminLayout,
  methods: {
    destroy(id) {
      if (confirm("Ви впевненні?")) {
        this.$inertia.delete(this.route("languages.destroy", id));
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("languages.create"),
    class: "btn btn-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-plus" aria-hidden="true"${_scopeId}></i> Добавити мову `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-plus",
            "aria-hidden": "true"
          }),
          createTextVNode(" Добавити мову ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if (_ctx.$page.props.success) {
    _push(`<div class="alert alert-success alert-dismissible mt-3"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas fa-check"></i> Вітаю!</h5> ${ssrInterpolate(_ctx.$page.props.success)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.error) {
    _push(`<div class="alert alert-danger alert-dismissible mt-3"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas fa-ban"></i> Увага!</h5> ${ssrInterpolate(_ctx.$page.props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.languages.length > 0) {
    _push(`<div class="card mt-4"><div class="card-body p-0"><table class="table table-sm table-striped"><thead><tr><th style="${ssrRenderStyle({ "width": "50px" })}">#</th><th>Найменування</th><th>Код</th><th style="${ssrRenderStyle({ "width": "210px" })}">Дія</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($props.languages, (language) => {
      _push(`<tr><td>${ssrInterpolate(language.id)}.</td><td>${ssrInterpolate(language.name)}</td><td>${ssrInterpolate(language.code)}</td><td class="d-flex justify-content-between">`);
      _push(ssrRenderComponent(_component_Link, {
        class: "btn btn-default btn-sm",
        href: _ctx.route("languages.edit", language.id)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Редагувати`);
          } else {
            return [
              createTextVNode("Редагувати")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<a class="btn btn-danger btn-sm">Видалити</a></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Language/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Link
  },
  layout: AdminLayout,
  setup() {
    const form = useForm({
      login: null,
      name: null,
      email: null,
      phone: null,
      password: null
    });
    function store() {
      form.post(route("users.store"));
    }
    return { form, store };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("users.index"),
    class: "btn btn-outline-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-arrow-left" aria-hidden="true"${_scopeId}></i> Список користувачів `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-arrow-left",
            "aria-hidden": "true"
          }),
          createTextVNode(" Список користувачів ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="card card-primary mt-4"><form><div class="card-body"><div class="form-group"><label for="name">Логін</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.login }, "form-control"])}"${ssrRenderAttr("value", $setup.form.login)} type="text" id="login" placeholder="Логін"><div class="text-danger small">${ssrInterpolate($setup.form.errors.login)}</div></div><div class="form-group"><label for="name">Ім&#39;я</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.name }, "form-control"])}"${ssrRenderAttr("value", $setup.form.name)} type="text" id="name" placeholder="Ім&#39;я"><div class="text-danger small">${ssrInterpolate($setup.form.errors.name)}</div></div><div class="form-group"><label for="email">Email</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.email }, "form-control"])}"${ssrRenderAttr("value", $setup.form.email)} type="email" id="email" placeholder="Email"><div class="text-danger small">${ssrInterpolate($setup.form.errors.email)}</div></div><div class="form-group"><label for="phone">Телефон</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.phone }, "form-control"])}"${ssrRenderAttr("value", $setup.form.phone)} type="text" id="phone" placeholder="Телефон"><div class="text-danger small">${ssrInterpolate($setup.form.errors.phone)}</div></div><div class="form-group"><label for="password">Пароль</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.password }, "form-control"])}"${ssrRenderAttr("value", $setup.form.password)} type="password" id="password" placeholder="Пароль"><div class="text-danger small">${ssrInterpolate($setup.form.errors.password)}</div></div></div><div class="card-footer"><button${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} type="submit" class="btn btn-primary">Зберегти</button></div></form></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: {
    Link
  },
  layout: AdminLayout,
  props: {
    user: Object
  },
  setup(props) {
    const form = useForm({
      login: props.user.login,
      name: props.user.name,
      email: props.user.email,
      phone: props.user.phone
      // password: null,
    });
    function update() {
      form.put(route("users.update", props.user.id));
    }
    return { form, update };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("users.index"),
    class: "btn btn-outline-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-arrow-left" aria-hidden="true"${_scopeId}></i> Список користувачів `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-arrow-left",
            "aria-hidden": "true"
          }),
          createTextVNode(" Список користувачів ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="card card-primary mt-4"><form><div class="card-body"><div class="form-group"><label for="name">Логін</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.login }, "form-control"])}"${ssrRenderAttr("value", $setup.form.login)} type="text" id="login" placeholder="Логін"><div class="text-danger small">${ssrInterpolate($setup.form.errors.login)}</div></div><div class="form-group"><label for="name">Ім&#39;я</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.name }, "form-control"])}"${ssrRenderAttr("value", $setup.form.name)} type="text" id="name" placeholder="Ім&#39;я"><div class="text-danger small">${ssrInterpolate($setup.form.errors.name)}</div></div><div class="form-group"><label for="email">Email</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.email }, "form-control"])}"${ssrRenderAttr("value", $setup.form.email)} type="email" id="email" placeholder="Email"><div class="text-danger small">${ssrInterpolate($setup.form.errors.email)}</div></div><div class="form-group"><label for="phone">Телефон</label><input class="${ssrRenderClass([{ "is-invalid": $setup.form.errors.phone }, "form-control"])}"${ssrRenderAttr("value", $setup.form.phone)} type="text" id="phone" placeholder="Телефон"><div class="text-danger small">${ssrInterpolate($setup.form.errors.phone)}</div></div></div><div class="card-footer"><button${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""} type="submit" class="btn btn-primary">Змінити</button></div></form></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "pagination pagination-sm m-0 float-right" }, _attrs))}><!--[-->`);
    ssrRenderList($props.links, (link, k) => {
      _push(`<li class="${ssrRenderClass([{ "active": link.active }, "page-item"])}">`);
      _push(ssrRenderComponent(_component_Link, {
        href: link.url,
        key: k,
        disabled: link.url === null,
        class: "page-link"
      }, null, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    Link,
    Pagination
  },
  props: {
    users: Object
  },
  layout: AdminLayout,
  setup(props) {
    console.log(props.users);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "template-cards" }, _attrs))}><div class="row"><div class="col-12 d-flex justify-content-between">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("users.create"),
    class: "btn btn-success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-plus" aria-hidden="true"${_scopeId}></i> Добавити користувача `);
      } else {
        return [
          createVNode("i", {
            class: "fa fa-plus",
            "aria-hidden": "true"
          }),
          createTextVNode(" Добавити користувача ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  if (_ctx.$page.props.success) {
    _push(`<div class="alert alert-success alert-dismissible mt-3"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas fa-check"></i> Вітаю!</h5> ${ssrInterpolate(_ctx.$page.props.success)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.error) {
    _push(`<div class="alert alert-danger alert-dismissible mt-3"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h5><i class="icon fas fa-ban"></i> Увага!</h5> ${ssrInterpolate(_ctx.$page.props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.users.data.length > 0) {
    _push(`<div class="card mt-4"><div class="card-body p-0"><table class="table table-sm table-striped"><thead><tr><th style="${ssrRenderStyle({ "width": "50px" })}">#</th><th>Ім&#39;я</th><th>E-mail</th><th style="${ssrRenderStyle({ "width": "210px" })}">Дія</th></tr></thead><tbody><!--[-->`);
    ssrRenderList($props.users.data, (user) => {
      _push(`<tr><td>${ssrInterpolate(user.id)}.</td><td>${ssrInterpolate(user.name)}</td><td>${ssrInterpolate(user.email)}</td><td class="d-flex justify-content-between">`);
      _push(ssrRenderComponent(_component_Link, {
        class: "btn btn-default btn-sm",
        href: _ctx.route("users.edit", user.id)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Редагувати`);
          } else {
            return [
              createTextVNode("Редагувати")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><div class="card-footer clearfix">`);
    _push(ssrRenderComponent(_component_Pagination, {
      links: $props.users.links
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    Head
  },
  props: {
    title: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(`<ul><li><a${ssrRenderAttr("href", _ctx.route("admin"))}>Admin</a></li></ul><h1>${ssrInterpolate($props.title)}</h1><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}><div class="container-fluid">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Index.vue": __vite_glob_0_0, "./Pages/Admin/Language/Create.vue": __vite_glob_0_1, "./Pages/Admin/Language/Edit.vue": __vite_glob_0_2, "./Pages/Admin/Language/Index.vue": __vite_glob_0_3, "./Pages/Admin/Users/Create.vue": __vite_glob_0_4, "./Pages/Admin/Users/Edit.vue": __vite_glob_0_5, "./Pages/Admin/Users/Index.vue": __vite_glob_0_6, "./Pages/Home.vue": __vite_glob_0_7 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || Layout;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).mixin({ methods: { route: window.route } });
    }
  })
);
