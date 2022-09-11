import React from "react";

const Laws = () => {
  return (
    <div>
      <h1 className="flex w-full justify-center items-center text-5xl text-pink-800">Awareness</h1>
          <div className="flex w-full justify-center items-center">
      <div className="grid grid-cols-3 gap-4 justify-between md:p-40 py-12 px-4">
           <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20  card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="http://ncw.nic.in/important-links/List-of-Laws-Related-to-Women">
                      Laws Related to Women
                    </a>
                  </p>
              </div>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
              <a href="https://yourstory.com/2016/06/laws-that-protect-women-rights/amp">
                Laws Protecting Women Rights
              </a>
            </p>
              </div>
            </div>
          </div> 

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
              <a href="https://www.amnesty.org/en/what-we-do/discrimination/womens-rights/">
                DIscrimination and Women Rights
              </a>
            </p>
              </div>
            </div>
          </div>   
         </div>
      </div>
    </div>
  );
};

export default Laws;
