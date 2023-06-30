import { AfterViewInit, Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { elementToSVG } from 'dom-to-svg';
import { DomSanitizer } from '@angular/platform-browser';
import { IParticlesProps } from "ng-particles"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  svgFromDom: any
  constructor(public domSanitizer: DomSanitizer) {
  }
  ngAfterViewInit(): void {
    // const testElement = document.getElementById('test');
    // console.log(testElement);
    // this.svgFromDom = elementToSVG(testElement as HTMLElement);
    //  this.svgFromDom = this.domSanitizer.bypassSecurityTrustHtml(this.svgFromDom)
    // console.log(this.svgFromDom);
  }
  title = 'material-admin';

  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions: IParticlesProps = {
    style: {
      width: '300px',
      height: '300px',
      borderRadius: '10px',
      position:'static',
      backgroundColor: '#000'
    },
    background: {
      // color:'#000'
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.bubble,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
        },
        resize: false,
      },
      modes: {
        push: {
          quantity: 1,

        },
        repulse: {
          distance: 200,
          duration: 0.1,
        },
      },
    },
     
    particles: {
      shadow: {
        enable:true,
        offset: {
          x:1,
          y:1,
        },
        blur: 10,
        color:'#fff'
      },
      color: {
        animation: {
          enable:true,
          speed: 1,
          count:10
        },
        value: "#ffffff",
      },
      links: {
        color: "#fff",
        distance: 50,
        enable: true,
        opacity: 0.7,
        width: 2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.outside,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 300,
        },
        value: 200,
      },
      
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 10,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 1
        },
        value: 1
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1.5, max: 3 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: any): void {
    console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
