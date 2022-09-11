import React from "react";

const Awareness = () => {
  return (
     <div>
          <h1 className="flex w-full justify-center items-center text-5xl text-pink-800">Articles</h1>
            <div className="flex w-full justify-center items-center">
      <div className="grid grid-cols-3 gap-4 justify-between md:p-40 py-12 px-4">
           <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20  card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="https://www.smilefoundationindia.org/p_awareness_and_safety_campaign.html">
                      Article 1
                    </a>
                  </p>
              </div>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="https://www.unilever.com/planet-and-society/respect-human-rights/promoting-safety-for-women/">
                      Article 2
                    </a>
                  </p>
              </div>
            </div>
          </div> 

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="https://www.thesafetybox.org/safety-awareness-tips-for-women-teens-and-girls">
                      Article 3
                    </a>
                  </p>
              </div>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="https://www.unwomen.org/en/what-we-do/ending-violence-against-women/creating-safe-public-spaces">
                      Article 4
                    </a>
                  </p>
              </div>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-30 py-20 card-gradient">
              <div class="font-bold text-xl mb-2 p-20"><p>
                    <a href="https://issuesiface.com/magazine/top-10-safety-tips-for-women">
                      Article 5
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

export default Awareness;
