init();

                function init(){
                    $('#fullpage').fullpage({
                        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
                        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                         menu: '#menu',
                    });
                    
                    $('#eng').hide();

                 
                }
                        // var  title = "Kempelen speaking machine";
                        // var content = `<div class="section">${title}
                        //                         <div class="jumbotron">
                        //                         <h1 class="display-3">${title}</h1>
                        //                         <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        //                         <hr class="my-4">
                        //                         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        //                         <p class="lead">
                        //                             <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        //                         </p>
                        //                         </div>
                        //                  </div>`

                   // slovak eng traslation 
                   $('button').click(()=>{
                        
                          $('#eng').toggle();})


                    $('#sktest').click(()=>{
                      
                        $('#skcontent').show()})

                      init();


                        // //adding a section dynamically
                        // $('button').click(function(){
                        //     $('#fullpage').append(content);
                        //test
                        //     //remembering the active section / slide
                        //     var activeSectionIndex = $('.fp-section.active').index();
                        //     var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();

                        //     $.fn.fullpage.destroy('all');

                        //     //setting the active section as before
                        //     $('.section').eq(activeSectionIndex).addClass('active');

                        //     //were we in a slide? Adding the active state again
                        //     if(activeSlideIndex > -1){
                        //         $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
                        //     }

                        //     init();
                        // });