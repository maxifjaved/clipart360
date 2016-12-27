import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.needRender = false;
    this.objects = [];
    this.targets = { table: [] };
  }

  componentDidMount() {
    this.init();
    window.addEventListener('resize', this.updateCameraAspect.bind(this));
  }

  componentWillUnmount() {
    if (this.request) {
      cancelAnimationFrame( this.request );
    }

    window.removeEventListener('resize', this.updateCameraAspect.bind(this));
  }

  init() {
    this.initContainer();
    this.initScene();
    this.initCamera();
    this.initControls();
    this.initRenderer();
    this.loadScene();
    this.animate();
  }

  initContainer() {
    this.container = ReactDOM.findDOMNode(this);
    this.updateAspect();
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.aspect.width / this.aspect.height, 1, 10000);
    this.camera.position.z = 3000;
  }

  initControls() {}

  initRenderer() {
    // renderer
    this.renderer = new THREE.WebGLRenderer();

    this.updateCameraAspect();
    this.renderWebGL();
  }

  loadScene() {
    this.requestRender();
  }

  updateAspect() {
    this.aspect = {
      width: this.container.clientWidth,
      height: window.innerHeight
    };
  }

  updateCameraAspect() {
    if (this.renderer === null) return;

    this.updateAspect();
    this.camera.aspect = this.aspect.width / this.aspect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.aspect.width, this.aspect.height);
    this.requestRender();
  }

  requestRender() {
    this.needRender = true;
  }

  animate() {
    this.request = requestAnimationFrame(this.animate.bind(this));

    if (this.needRender) {
      this.renderWebGL();
      this.needRender = false;
    }
  }


  renderWebGL() {
    console.log('render');
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div id="canvas-container">
      </div>
    );
  }
}

Editor.propTypes = {
  needRenderer: PropTypes.bool,
  objects: PropTypes.array,
  targets: PropTypes.object
};

export default Editor;
