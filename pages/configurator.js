import React from 'react';
import Navbar from '../components/Configurator/Navbar/Navbar.js';
import Actionbar from '../components/Actionbar/Actionbar.js';
import Image from 'next/image';


const Configurator = () => {
    return (
        <div class="h-screen bg-slate-600">
            <Navbar></Navbar>
            <div class="h-[calc(100%-50px)] flex-col flex lg:flex-row">
                <div class="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div class="h-[50px]">
                        <h3>Model list</h3>
                    </div>
                    <div class="h-[calc(100%-50px)] lg:h-full">
                        <div class="h-full flex flex-row  lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                            <div class="h-full aspect-square bg-slate-200">Model item</div>
                        </div> 
                    </div>                 
                </div>
                <div class="bg-slate-50 h-1/2 lg:h-full lg:basis-1/2">
                    <div>
                        <h1>3D viewer</h1>
                    </div>
                </div>
                <div class="bg-slate-300 h-1/4 lg:h-[calc(100%-50px)] lg:basis-1/4">
                    <div class="h-[50px]">
                        <h3>Material slider</h3>
                    </div>
                    <div class="h-[calc(100%-50px)] lg:h-full">
                        <div class="h-full flex flex-row lg:grid gap-2 p-2 lg:grid-cols-2 overflow-auto bg-slate-600">
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                            <div class="h-full aspect-square bg-slate-200">Material</div>
                        </div> 
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Configurator;