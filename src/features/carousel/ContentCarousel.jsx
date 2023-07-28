import React from 'react';
import { Icon } from '../icon/Icon';

export const ContentCarousel = () => {
    // <img src="/logo512.png" className="d-block w-50" alt="..."/>
    return(
        <div 
            id="carouselExampleAutoplaying"
            className="carousel slide d-flex flex-grow-1"
            data-bs-ride="carousel"
            data-bs-theme="dark" 
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex flex-wrap flex-grow-1 justify-content-center">
                        <Icon icon="nextjs" />
                        <Icon icon="firebase" />
                        <Icon icon="nextauth" />
                        <Icon icon="trpc" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex flex-wrap flex-grow-1 justify-content-center">
                        <Icon icon="docker" />
                        <Icon icon="react" />
                        <Icon icon="redux" />
                        <Icon icon="jspdf" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex flex-wrap flex-grow-1 justify-content-center">
                        <Icon icon="nodejs" />
                        <Icon icon="prisma" />
                        <Icon icon="chartjs" />
                        <Icon icon="materialui" />
                        <Icon icon="cypress" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex flex-wrap flex-grow-1 justify-content-center">
                        <Icon icon="django" />
                        <Icon icon="pandas" />
                        <Icon icon="git" />
                        <Icon icon="numpy" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex flex-wrap flex-grow-1 justify-content-center">
                        <Icon icon="bootstrap" />
                        <Icon icon="matplotlib" />
                        <Icon icon="zod" />
                        <Icon icon="googlecloud" />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}