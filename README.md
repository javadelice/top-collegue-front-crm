# Top Collegues

Top Collegues is a SpringBoot&Angular6 project made for a company wanting to deploy a ranking between the colleagues and select the most appreciated colleague.
This app is autonomous and has its own back (Spring Boot) and front (Angular).

## Rules of the app
  - Each colleague can join the game, but only the ones that are registered can vote.
  - To join, each colleague has to connect through a loggin page.
  - Once logged, the colleague can switch his/her official picture with another one (funnier!) whenever he/she would like.
  - A colleague can't vote for him/herself.
  - Each participant can do a positive vote and a negative vote (of a fixed value of 100 points).
  - Once the vote has been done and confirmed, it can't be changed.
  - Each participant can get access to the ranking only when his/her vote has been done.
  - A participant can't unsuscribe. Once he/she has decided to join the game, he/she has to play the game unil the end.
  - Votes are anonymous.
  - The ranking is made (calculated) once there is a minimum of 10 participants.
  - The participant can loggout and loggin whenever he/she wants.

## Starting
You can access to the app through this link: https://javadelice.github.io/top-collegue-front-crm/

## Overview
The app is divided in several graphic components as following:
  - <strong>loggin component</strong>: this is the component where the participant will logg with his/her email and password
  - <strong>menu component</strong>: this is the component where the menu is displayed (acces to the vote page, ranking page and picture page)
  - <strong>registration component</strong>: this is the component where the participant will register him/herself to the game. Then this component will be reused for the participant to update his/her picture.
  This componenent is displayed only on the first participant's connection. Once the participant is registered, he can't go back to this view.
  - <strong>votes component</strong>: this is the component on which the participants can vote. Once they have vote, they still can access to this page but they can't change their click votes.
  - <strong>ranking component</strong>: this is the component on which the participants can access to the ranking. The ranking will be displayed only once the participant as confirmed his votes and only once there is a minimum of 10 participants registered.

## Made with
  - Angular6
  - BootStrap

## Authors
* **Robin Brq** _alias_ [@robinBrGit](https://github.com/robinBrGit)
* **Clément Brc** _alias_ [@ClementBrc](https://github.com/ClementBrc)
* **Mathilde Mnr** _alias_ [@Matcinta](https://github.com/Matcinta)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
