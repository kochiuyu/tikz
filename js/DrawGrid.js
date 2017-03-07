   function drawGrid() {

            var cnv = document.getElementById("myCanvas");



            var gridOptions = {

                minorLines: {

                    separation: 5,

                    color: '#E5E4E2'

                },

                majorLines: {

                    separation: 30,

                    color: '#E5E4E2'

                }

            };

            //drawGridLines(cnv, gridOptions.minorLines);

            drawGridLines(cnv, gridOptions.majorLines);



            return;

        }



        function drawGridLines(cnv, lineOptions) {

            var iWidth = 570;

            var iHeight = 470;


            var ctx = cnv.getContext('2d');


			ctx.save();

			ctx.globalCompositeOperation="destination-over"; //make grid at the bottom

			//translate axis

			ctx.transform(1, 0, 0, -1, x_offset, cnv.height-y_offset);

			//ctx.transform(1, 0, 0, -1, 10, 380);



            ctx.strokeStyle = lineOptions.color;

            ctx.strokeWidth = 1;



            ctx.beginPath();



            var iCount = null;

            var i = null;

            var x = null;

            var y = null;



            iCount = Math.floor(iWidth / lineOptions.separation);



            for (i = 1; i <= iCount; i++) {

                x = (i * lineOptions.separation);

                ctx.moveTo(x, 0);

                ctx.lineTo(x, iHeight);

                ctx.stroke();

            }





            iCount = Math.floor(iHeight / lineOptions.separation);



            for (i = 1; i <= iCount; i++) {

                y = (i * lineOptions.separation);

                ctx.moveTo(0, y);

                ctx.lineTo(iWidth, y);

                ctx.stroke();

            }

			ctx.strokeStyle = "#000000"

            

			

			ctx.closePath();

			ctx.restore();

			ctx.globalCompositeOperation="source-over";



            return;

        }
