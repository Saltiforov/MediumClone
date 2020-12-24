import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalFeed from '@/views/GlobalFeed.vue'
import YourFeed from '@/views/YourFeed.vue'
import TagFeed from '@/views/TagFeed.vue'
import Register from '@/views/Register.vue'
import Login from "@/views/Login";
import Article from "@/views/Article";
import CreateArticle from "@/views/CreateArticle";
import EditArticle from "@/views/EditArticle";
import Settings from "@/views/Settings";
import UserProfile from "@/views/UserProfile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed
  },
  {
    path: '/article/new',
    name: 'createArticle',
    component: CreateArticle
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: Article
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: EditArticle
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: UserProfile
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
