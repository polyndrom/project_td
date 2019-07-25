class CreateMap {
	constructor(number) {
		if (number == 1) {
			var mas = [[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "x", "#", "#", "#", "#", "#", "#", "#", 
            "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
		   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "z", "#", "#", "#", "#", "#", "#", "#", 
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
		   ["c", "c", "c", "c", "c", "c", "c", "c", "v", "0", "z", "#", "#", "#", "#", "#", "b", ".", 
		    ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "x", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "m", "c", "c", "c", "c", "c", "c", "c", "c", "c", "v", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "b", ".", ".", ".", ".", "a", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "n", "0", "0", "0", "0", "0", "0", "z", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "n", "0", "m", "c", "c", "c", "c", "s", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "n", "0", "d", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "a", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "n", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
		    "z", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "f", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c",
		    "s", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "z", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "d", ".", ".", ".", ".", "."],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "n", "0", "0", "0", "0", "0", "0", "0"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "f", "c", "c", "c", "c", "c", "c", "c"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
		   ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
		    "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]]; 
			return mas;
		}
	}
}