using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeomutantAPI.Models
{
	public class Usuario
	{
		public int ID_Usuario { get; set; }
		public string Login { get; set; }
		public string Senha { get; set; }
		public string Primeiro_Nome { get; set; }
		public string Ultimo_Nome { get; set; }
	}
}
