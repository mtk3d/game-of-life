var Xlength = 350;
var Ylength = 160;
var cursorX = 0;
var cursorY = 0;
var neightbours = 0;
var population = 0;
var generation = 0;

var cell = new Array(Xlength);
for (var i = 0; i <= Xlength; i++) {
  cell[i] = new Array(Ylength+1);
}

var next_gen = new Array(Xlength);
for (var i = 0; i <= Xlength; i++) {
  next_gen[i] = new Array(Ylength+1);
}

for(cursorY=0; cursorY<Ylength; cursorY++)
{
	for(cursorX=0; cursorX<Xlength; cursorX++)
	{
		cell[cursorX][cursorY]=0;
		next_gen[cursorX][cursorY]=0;
	}
}

function drawTable(){
	var nX, nY, row="", column="";

	for(nY=1; nY<=Ylength; nY++)
		{
			for(nX=1; nX<=Xlength; nX++)
			{
				row += "<td id="+nX+"_"+nY+"></td>";
			}
			column += "<tr>"+row+"</tr>";
			row = "";
		}
	return column;
}

function calculateLife(){
	for(cursorY=1; cursorY<Ylength; cursorY++)
	{
		for(cursorX=1; cursorX<Xlength; cursorX++)
		{
			if(cell[cursorX-1][cursorY-1] == 1){neightbours++;}
			if(cell[cursorX][cursorY-1] == 1){neightbours++;}
			if(cell[cursorX+1][cursorY-1] == 1){neightbours++;}
			if(cell[cursorX-1][cursorY] == 1){neightbours++;}
			if(cell[cursorX+1][cursorY] == 1){neightbours++;}
			if(cell[cursorX-1][cursorY+1] == 1){neightbours++;}
			if(cell[cursorX][cursorY+1] == 1){neightbours++;}
			if(cell[cursorX+1][cursorY+1] == 1){neightbours++;}

			if(cell[cursorX][cursorY]==1)
			{
				if(neightbours==2 || neightbours==3)
				{
					next_gen[cursorX][cursorY] = 1;
				}
				else
				{
					next_gen[cursorX][cursorY] = 0;
				}
			}
			else
			{
				if(neightbours==3)
				{
					next_gen[cursorX][cursorY] = 1;
				}
			}
			neightbours = 0;
		}
	}
	for(cursorY=0; cursorY<Ylength; cursorY++)
	{
		for(cursorX=0; cursorX<Xlength; cursorX++)
		{
			cell[cursorX][cursorY]=next_gen[cursorX][cursorY];
			if(next_gen[cursorX][cursorY]==1)
			{
				population++;
			}
		}
	}
	document.getElementById('population').innerHTML = 'Population: '+population;
	population=0;
}

function display()
{
	for(cursorY=1; cursorY<=Ylength; cursorY++)
	{
		for(cursorX=1; cursorX<=Xlength; cursorX++)
		{
			if(cell[cursorX][cursorY]==1)
			{
				document.getElementById(cursorX+"_"+cursorY).style['background-color'] = 'yellow';
			}
			else
			{
				document.getElementById(cursorX+"_"+cursorY).style['background-color'] = '#565656';
			}
		}
	}
}

/*cell[46][20] = 1;
cell[47][20] = 1;
cell[48][20] = 1;
cell[49][20] = 1;
cell[50][20] = 1;
cell[51][20] = 1;
cell[52][20] = 1;
cell[53][20] = 1;*/

/*cell[46][20] = 1;
cell[47][20] = 1;
cell[48][20] = 1;
cell[49][20] = 1;
cell[50][20] = 1;
cell[51][20] = 1;
cell[52][20] = 1;
cell[53][20] = 1;

cell[46][21] = 1;
cell[48][21] = 1;
cell[49][21] = 1;
cell[50][21] = 1;
cell[51][21] = 1;
cell[53][21] = 1;

cell[46][22] = 1;
cell[47][22] = 1;
cell[48][22] = 1;
cell[49][22] = 1;
cell[50][22] = 1;
cell[51][22] = 1;
cell[52][22] = 1;
cell[53][22] = 1;*/

/*cell[96][51] = 1;
cell[97][51] = 1;
cell[97][49] = 1;
cell[99][50] = 1;
cell[100][51] = 1;
cell[101][51] = 1;
cell[102][51] = 1;*/

for(cursorY=0; cursorY<Ylength; cursorY++)
{
	for(cursorX=0; cursorX<Xlength; cursorX++)
	{
		var n = Math.floor((Math.random() * 2) + 1);
		if(n==1)
		{
			cell[cursorX][cursorY]=0;
		}
		else
		{
			cell[cursorX][cursorY]=1;
		}
	}
}
