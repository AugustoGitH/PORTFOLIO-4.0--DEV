const animationsPresence = {
  scale: `
    @keyframes scale-up-center{0%{transform:scale(0)}100%{transform:scale(1)}}
    animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both
  `,
  translateRight: `@keyframes translateRight {
                        from { opacity: 0; transform: translateX(-100%); }
                        to { opacity: 1; transform: translateX(0); } 
                    }
                    animation: translateRight .5s ease-in-out;`,
  translateDown: `@keyframes translateDown {
                      from { opacity: 0; transform: translateY(-50px); }
                      to { opacity: 1; transform: translateY(0); } 
                  }
                  animation: translateDown .3s ease-in-out;`,                  
  opaciy: `@keyframes opacity {
                      from { opacity: 0; }
                      to { opacity: 1; } 
                  }
                  animation: opacity .3s ease-in-out;`,
};

export default animationsPresence;
