import { Router } from "./router.js"

const router = new Router()

const navigation = document.querySelectorAll("nav li a");
for(let a of navigation){
  a.addEventListener('click', router.route)
}

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add( 404, "/pages/404.html",)

router.handle()