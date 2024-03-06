import { Genero } from "./GenerosLivro";
import { LivroInfo } from "./LivroInfo";
import { StatusLivros } from "./StatusLivro";
import { Status } from "./classStatus";

let LivroD: Status   = new Status(StatusLivros.Disponivel, Genero.FANTASIA)
let LivroE: LivroInfo = new LivroInfo(StatusLivros.Emprestado, Genero.FICCAO )
let LivroA: LivroInfo = new LivroInfo(StatusLivros.Atrasado, Genero.ROMANCE)





