import React from 'react';
import { AnimationBox } from './AnimationBox';

import Firebase from '../../assets/firebase.svg';
import Nodejs from '../../assets/nodejs.svg';
import Cypress from '../../assets/cypress.svg';
import Docker from '../../assets/docker.svg';
import Googlecloud from '../../assets/googlecloud.svg';
import Nextjs from '../../assets/next.svg';

import Nextauth from '../../assets/nextauth.svg';
import Prisma from '../../assets/prisma.svg';
import Trpc from '../../assets/trpc.svg';
import Zod from '../../assets/zod.svg';
import Redux from '../../assets/redux.svg';
import ReactIcon from '../../assets/react.svg';

import Bootstrap from '../../assets/bootstrap.svg';
import Chartjs from '../../assets/chartjs.svg';
import Django from '../../assets/django.svg';
import Git from '../../assets/git.svg';
import Materialui from '../../assets/materialui.svg';
// Room for one more

import Matplotlib from '../../assets/matplotlib.svg';
import Numpy from '../../assets/numpy.svg';
import Pandas from '../../assets/pandas.svg';
import Jspdf from '../../assets/jspdf.svg';
// Room for one more
// Room for one more

export const AnimationsContainer = () => {

    const texturePack1 = {
        texture1: Firebase,
        texture2: Nodejs,
        texture3: Cypress,
        texture4: Docker,
        texture5: Googlecloud,
        texture6: Nextjs,
    }

    const texturePack2 = {
        texture1: Nextauth,
        texture2: Prisma,
        texture3: Trpc,
        texture4: Redux,
        texture5: Zod,
        texture6: ReactIcon,
    }

    const texturePack3 = {
        texture1: Bootstrap,
        texture2: Chartjs,
        texture3: Django,
        texture4: Git,
        texture5: Materialui,
        texture6: Nextjs, // second time
    }

    const texturePack4 = {
        texture1: Matplotlib,
        texture2: Numpy,
        texture3: Pandas,
        texture4: Jspdf,
        texture5: Docker, // second time 
        texture6: ReactIcon, // second time 
    }

    const customRotation1 = {
        x: 0.02,
        y: 0.025,
        z: 0.01,
    }

    const customRotation2 = {
        x: 0.012,
        y: 0.015,
        z: 0.001,
    }

    const customRotation3 = {
        x: 0.002,
        y: 0.01,
        z: 0.05,
    }

    return(
        <>
            <div style={{display: "flex", justifyContent: "flex-end", flexWrap: "wrap"}}>
                <AnimationBox 
                    id="1" 
                    textures={texturePack1}
                />
                <AnimationBox 
                    id="2" 
                    textures={texturePack2}
                    rotation={customRotation1}
                />
                <AnimationBox 
                    id="3" 
                    textures={texturePack3}
                    rotation={customRotation2}
                />
                <AnimationBox 
                    id="4" 
                    textures={texturePack4}
                    rotation={customRotation3}
                />
            </div>
            <p style={{float: "right", color: "gray"}}>You can click and rotate the boxes!</p>
        </>
    )
}