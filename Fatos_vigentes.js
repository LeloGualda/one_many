

var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];


var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

fatos_vigentes();

function fatos_vigentes (){
var resultado =[];
r = 0;
//primeiro percorrer todo o schema, para análisar os tipos de tupla
for(i=0;i<schema.length;i++)
{ // a cada tipo de tupla verificar sua posição caso exista em facts[]
  for(k=0;k<facts.length;k++)
  { //se o registro é considerado verificar para cadastrar
    if(facts[k][3])
    {     // para a tuupla one-to-one substituir sua posição
      if(schema[i][2]=='one' && schema[i][0] == facts[k][1] )
      {
        
        e = 0//caso exista a posição para substituir 
        for(j=0;j<resultado.length;j++) //todos os resultados já encontrados
        {
          if(resultado[j][0]==facts[k][0])
          {
            e = j; // posição do resultado
          }
        }
        if(e>0)  // caso precisa substituir
        { 
          resultado[e] = facts[k];
        }
        else // se não acrescenta uma nova tupla
        {
          resultado[r] = facts[k];
          r++;
        }
          
      }// para a tupla one-to-many acrescentar um novo cliente assim que verdadeiro
      else if(schema[i][2]=='many' && schema[i][0] == facts[k][1] )
      {
          resultado[r] = facts[k];
          r++;
      }
    }
  }
}
return(resultado);
}
