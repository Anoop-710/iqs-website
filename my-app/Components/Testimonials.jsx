'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import kousalya from '../../public/assets/kousalya.jpeg';
import r360 from '../../public/assets/r360.jpg';
import Suhas from '../../public/assets/suhas.jpeg';
import adp from '../../public/assets/adpsuhas.png';
import seetesh from '../../public/assets/seetesh.jpeg';
import neosoft from '../../public/assets/neosoft.jpg';
import umesh from '../../public/assets/umesh.jpeg';
import mantralabs from '../../public/assets/umeshmantra.png';
import sangeeta from '../../public/assets/sangeeta.jpeg';
import optimum from '../../public/assets/optimum.jpg';
import yajna from '../../public/assets/yajnadutta.jpeg';
import template from '../../public/assets/template.png';
function Testimonials() {
  return (
    <div>
      
        <section>
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h3 class="mb-6 mt-24 text-4xl font-bold text-purple-600">Testimonials</h3>
            <h4 class="text-2xl font-bold text-green-600">It's not just us.</h4>
            <h4 class="mb-6 text-2xl font-bold text-green-600">Here's what our students have to say about us.</h4>
          </div>
        
       
          <section id="testimonies" class="py-20 ">
          <Fade up>
            <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


                
               <Fade up>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                    {/* Col 1 */}
                    
                    <ul class="space-y-8">
                      <li className="text-sm leading-6">
                        <div className="relative group ">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                
                                <div className="flex justify-center ">
                                    <Image src={kousalya} alt="profile" width={0} height={0} className="rounded-full w-36 h-36" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Kousalya</h2>
                                <span className="text-sm leading-6 text-white">
                                    Bachelor of Engineering<br />
                                    <b>Associate Software Engineer</b><br />
                                    <p>IQSchool Student</p>
                                    <Image src={r360} alt="r360" width={0} height={0} sizes="100vw" className="w-28 h-10 mt-4 mx-auto" />
                                </span>
                            </div>
                        </div>
                      </li>
                        
                      <li className="text-sm leading-6">
                        <div className="relative group ">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                
                                <div className="flex justify-center ">
                                    <Image src={Suhas} alt="profile" width={0}  height={0} className="rounded-full w-36 h-40" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Suhas HS</h2>
                                <span className="text-sm leading-6 text-white">
                                    Bachelor of Engineering<br />
                                    <b>Associate Software Engineer</b><br />
                                    <p>IQSchool Student</p>
                                    <Image src={adp} alt="r360" width={0} height={0} sizes="100vw" className="w-28 h-10 mt-4 mx-auto" />
                                </span>
                            </div>
                        </div>
                      </li>
                        
                      <li class="text-sm leading-6">
                            <div class="relative group">
                                <div
                                    class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                    <div
                                        class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4"><img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                                <p class="text-gray-500 text-md">CEO of Twitter</p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                   

                    {/* Col 2 */}
                   
                    <ul class="hidden space-y-8 sm:block">
                        <li class="text-sm leading-6">
                            <div class="relative group">
                                <div
                                    class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                    <div
                                        class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4"><img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                                <p class="text-gray-500 text-md">CEO of Twitter</p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        
                        <li className="text-sm leading-6">
                        <div className="relative group ">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                
                                <div className="flex justify-center ">
                                    <Image src={seetesh} alt="profile" width={0} height={0} className="rounded-full  w-36 h-40" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Seetesh Kumar Mallik</h2>
                                <span className="text-sm leading-6 text-white">
                                    Bachelor of Engineering<br />
                                    <b>Associate Software Engineer</b><br />
                                    <p>IQSchool Student</p>
                                    <Image src={neosoft} alt="r360" width={0} height={0} sizes="100vw" className="w-36 h-12 mt-4 mx-auto" />
                                </span>
                            </div>
                        </div>
                        </li>


                        <li className="text-sm leading-6">
                          <div className="relative group ">
                              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                              <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                  
                                  <div className="flex justify-center ">
                                      <Image src={umesh} alt="profile"  height={150} className="rounded-full  w-36 h-36" />
                                  </div>
                                  <h2 className="text-xl font-semibold text-white">Umesh</h2>
                                  <span className="text-sm leading-6 text-white">
                                      Bachelor of Engineering<br />
                                      <b>Associate Software Engineer</b><br />
                                      <p>IQSchool Student</p>
                                      <Image src={mantralabs} alt="r360" width={0} height={0} sizes="100vw" className="w-36 h-12 mt-4 mx-auto" />
                                  </span>
                              </div>
                          </div>
                        </li>
                    </ul>
                 


                    {/* Col 3 */}
                   
                    <ul class="hidden space-y-8 lg:block">
                      <li className="text-sm leading-6">
                          <div className="relative group ">
                              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                              <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                  
                                  <div className="flex justify-center ">
                                      <Image src={sangeeta} alt="profile"  height={150} className="rounded-full  w-36 h-40" />
                                  </div>
                                  <h2 className="text-xl font-semibold text-white">Sushree Sangita Swan</h2>
                                  <span className="text-sm leading-6 text-white">
                                      Bachelor of Engineering<br />
                                      <b>Associate Software Engineer</b><br />
                                      <p>IQSchool Student</p>
                                      <Image src={optimum} alt="r360" width={0} height={0} sizes="100vw" className="w-36 h-12 mt-4 mx-auto" />
                                  </span>
                              </div>
                          </div>
                      </li>

                      <li className="text-sm leading-6">
                          <div className="relative group ">
                              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                              <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                  
                                  <div className="flex justify-center ">
                                      <Image src={yajna} alt="profile"  height={150} className="rounded-full  w-36 h-36" />
                                  </div>
                                  <h2 className="text-xl font-semibold text-white">Yajna Dutta Biswal</h2>
                                  <span className="text-sm leading-6 text-white">
                                      Bachelor of Engineering<br />
                                      <b>Associate Software Engineer</b><br />
                                      <p>IQSchool Student</p>
                                      <Image src={template} alt="r360" width={0} height={0} sizes="100vw" className="w-36 h-12 mt-4 mx-auto" />
                                  </span>
                              </div>
                          </div>
                      </li>
                        
                      <li class="text-sm leading-6">
                            <div class="relative group">
                                <div
                                    class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                    <div
                                        class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4"><img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                                <p class="text-gray-500 text-md">CEO of Twitter</p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    

                </div>
                </Fade>
            </div>
            </Fade>
          </section>
        

          <Carousel>
                 <ul class="space-y-8 w-full flex ">
                      <li className="text-sm leading-6">
                        <div className="relative group ">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                
                                <div className="flex justify-center ">
                                    <Image src={kousalya} alt="profile" width={0} height={0} className="rounded-full w-36 h-36" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Kousalya</h2>
                                <span className="text-sm leading-6 text-white">
                                    Bachelor of Engineering<br />
                                    <b>Associate Software Engineer</b><br />
                                    <p>IQSchool Student</p>
                                    <Image src={r360} alt="r360" width={0} height={0} sizes="100vw" className="w-28 h-10 mt-4 mx-auto" />
                                </span>
                            </div>
                        </div>
                      </li>
                        
                      <li className="text-sm leading-6">
                        <div className="relative group ">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div className="relative p-6 space-y-6 leading-none text-center bg-slate-800 border rounded-lg">
                                
                                <div className="flex justify-center ">
                                    <Image src={Suhas} alt="profile" width={0}  height={0} className="rounded-full w-36 h-40" />
                                </div>
                                <h2 className="text-xl font-semibold text-white">Suhas HS</h2>
                                <span className="text-sm leading-6 text-white">
                                    Bachelor of Engineering<br />
                                    <b>Associate Software Engineer</b><br />
                                    <p>IQSchool Student</p>
                                    <Image src={adp} alt="r360" width={0} height={0} sizes="100vw" className="w-28 h-10 mt-4 mx-auto" />
                                </span>
                            </div>
                        </div>
                      </li>
                        
                      <li class="text-sm leading-6">
                            <div class="relative group">
                                <div
                                    class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                                    <div
                                        class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                        <div class="flex items-center space-x-4"><img
                                                src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                                class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                            <div>
                                                <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                                <p class="text-gray-500 text-md">CEO of Twitter</p>
                                            </div>
                                        </div>
                                        <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                            semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                            pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>


        </section>
      

    </div>
  )
}

export default Testimonials