function moretext() {
   var text1=document.getElementById("text1");
   var text2=document.getElementById("text2");
   var btn=document.getElementById("btn");

    if (text1.style.display === "none"){
        text1.style.display="inline";
        text2.style.display="none";
        btn.innerHTML="Mais Informações";
      }else{
       text1.style.display="none";
       text2.style.display="inline-flex";
       text2.innerHTML="<strong>Sinopse</strong>: <em> Ambientado na Londres dos anos 70 em meio à revolução do punk rock, o filme mostra uma jovem vigarista chamada Estella, uma garota inteligente e criativa determinada a fazer um nome para si através de seus designs. Ela faz amizade com uma dupla de jovens ladrões e, juntos, constroem uma vida para si nas ruas de Londres. Um dia, o talento de Estella chama a atenção da Baronesa Von Hellman, uma lenda fashion que é devastadoramente chique e assustadora. Mas o relacionamento delas desencadeia um curso de eventos e revelações que farão com que Estella abrace seu lado rebelde e se torne a Cruella.</em>";
       btn.innerHTML="Mostrar Menos";
    };
};
