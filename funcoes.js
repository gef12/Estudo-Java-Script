		function teste()
		{
			var n1 = window.prompt('Número 1:');
			var n2 = window.prompt('Número 2:');

			var resultado = parseInt(n1) + parseInt(n2) ;	

			//alert(resultado);

			if (resultado <= 5)
			{
				alert('Com uma nota de ' + resultado + ' infelizmente você foi reprovado.');
			} else if ( (resultado > 5) && (resultado < 6.1) ){
				alert('Com uma nota de ' + resultado + ' você precisa fazer uma nova prova.');
			} else if ( (resultado >= 6.1) && (resultado < 10) ) {
				 alert('Com uma nota de ' + resultado + ' você foi aprovado.');
			} else 
			{
				alert('Você foi um ótimo aluno.');
			}

		//onclick e on load e if e else
		}

		function mask_date()
		{
			var n_char = document.getElementById("data").value.length;
			if(n_char == 2)
			{
				if(parseInt(document.getElementById("data").value) > 31 )
				{
					alert('valor incorreto');
					document.getElementById("data").value = "";
				}
				else
				{
					document.getElementById("data").value = document.getElementById("data").value + "/";
				}
				

			}
			else if(n_char == 5)
			{
				if(parseInt(document.getElementById("data").value) > 3112 )
				{
					alert('valor incorreto');
					document.getElementById("data").value = "";
				}
				else
				{
					document.getElementById("data").value = document.getElementById("data").value + "/";
				}
			}

		}

		function mask_cep()
		{
		    var n_char = document.getElementById("cep").value.length;
		   	
		    if (n_char == 5){
		    	document.getElementById("cep").value = document.getElementById("cep").value + "-";
	            }			
		}

	function mask_phone()
	{
	    var n_char = document.getElementById("phone").value.length;
	   	
	    if (n_char == 2){
	    	document.getElementById("phone").value = "(" + document.getElementById("phone").value + ") ";
            } else if (n_char == 9){
		document.getElementById("phone").value = document.getElementById("phone").value + "-";
	    }		
	}