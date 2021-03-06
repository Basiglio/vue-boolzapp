var app = new Vue({
  el: '#app',
  data: {
    userName: "Basiglio",
    contacts:
    [
	{
		name: 'Michele',
		avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],
	},
],
// CREO VARIABILE PER INDICE UTENTE ATTIVO
  selectedIndex: 0,
  selectedUser: {},
   // CREO VARIABILE PER PRELEVARE IL NUOVO MESSAGGIO DAL CAMPO INPUT
   newMessage: "",
   searchN: "",
   filteredContacts: []
  },
  created: function(){
    this.selectedUser = this.contacts[0];
    this.filteredContacts = this.contacts;
  },
  methods: {
    selectUser: function(index) {
      console.log(index);
      this.selectedUser = this.contacts[index];
      this.selectedIndex = index;
      console.log(this.selectedUser);
    },

    addMessage: function(){
      // CREO NUOVO OGGETTO CHE DEFINISCO COME UN OGGETTO GIA PRESENTE
      var newObj = {
        date: 'oggi è il giorno di oggi',
        text: this.newMessage,
        status: 'received'
      };
      this.selectedUser.messages.push(newObj);
      this.newMessage = "";

      const arrayToPush = this.selectedUser.messages;
      setTimeout(function () {
        var newAutoObj = {
          date: 'oggi è il giorno di oggi',
          text: 'ok!',
          status: 'sent'
        };
        arrayToPush.push(newAutoObj);
      }, 1000);
    },

//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter((element) => {
//    return number % 2 == 0;
// });
    searchName: function() {
      if (this.searchN !== "") {
        this.filteredContacts = this.contacts.filter((element) => {
          return element.name == this.searchN;
        });
      } else {
        this.filteredContacts = this.contacts;
      }

    }
  }
});
