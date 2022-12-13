// Canvas
const canvas = document.getElementById('canvas')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer({
  antiAlias: true,
  canvas: canvas,
  alpha: true,
})
renderer.setSize(window.innerWidth * 0.85, window.innerHeight * 0.85)
renderer.setPixelRatio(window.devicePixelRatio)

camera.position.z += -10.132760291028331
camera.position.y += 8.323648018048944
camera.position.x += -11.620048095997191

window.addEventListener('resize', function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight)
  camera.aspect = this.window.innerWidth / this.window.innerHeight
  camera.updateProjectionMatrix()
})

const controls = new THREE.OrbitControls(camera, canvas)

const loader = new THREE.GLTFLoader().load('bunga.gltf', function (result) {
  const gltfScene = result.scene
  scene.add(gltfScene)
})

const hlight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1.2)
scene.add(hlight)

function updateScene() {
  renderer.render(scene, camera)
  requestAnimationFrame(updateScene)
}

updateScene()
