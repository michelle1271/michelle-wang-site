import React from 'react';
import MichelleResume from "../../assets/michelle-wang-resume.pdf";
import './Logo.css';

const MyIcon = () => {

    return (
        <section className="logos">
            <a href="https://www.linkedin.com/in/michelle-wng" target="_blank" rel="noreferrer">
                <div id='linkedin'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="45"
                        // height="45"
                        viewBox="0 0 256 256">

                        <g
                        fill="#332f2f"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                        >
                        <g transform="scale(5.12,5.12)">
                            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                        </g>
                        </g>
                    </svg>
                </div>
            </a>
            
            <a href="https://github.com/michelle1271?tab=repositories" target="_blank" rel="noreferrer"> 
                <div id='github'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="45"
                        // height="45"
                        viewBox="0 0 256 256"
                        >
                        <g fill="#332f2f">
                            <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </a>

            <a href={MichelleResume} target="_blank" rel="noreferrer"> 
                <div id='resume'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="45"
                        // height="45"
                        viewBox="0 0 256 256"
                        >
                        <g fill="#332f2f">
                            <g transform="scale(8.53333,8.53333)">
                            <path d="M24.707,8.793l-6.5,-6.5c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293h-10.5c-1.105,0 -2,0.895 -2,2v22c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-16.5c0,-0.265 -0.105,-0.519 -0.293,-0.707zM18,21h-8c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h8c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM20,17h-10c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM18,10c-0.552,0 -1,-0.448 -1,-1v-5.096l6.096,6.096z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </a>

            <a href="mailto:michelle.wang1@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                <div id='email'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="45"
                        // height="45"
                        viewBox="0 0 256 256"
                        >
                        <g fill="#332f2f">
                            <g transform="scale(5.33333,5.33333)">
                            <path d="M10,8c-3.14,0 -5.72047,2.42 -5.98047,5.5l19.98047,10.78906l19.98047,-10.78906c-0.26,-3.08 -2.84047,-5.5 -5.98047,-5.5zM4,16.89063v17.10938c0,3.31 2.69,6 6,6h28c3.31,0 6,-2.69 6,-6v-17.10937l-19.28906,10.42969c-0.22,0.12 -0.46094,0.17969 -0.71094,0.17969c-0.25,0 -0.49094,-0.05969 -0.71094,-0.17969z"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </a>
        </section>
    );
  };
  
  export default MyIcon;