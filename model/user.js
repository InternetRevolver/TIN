//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const leagueExtent = [];

class League {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(fullName, foundationYear, dateStart, dateEnd, id) {
        this.fullName = fullName;
        this.foundationYear = foundationYear;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.id = id;
    }

    //dodawanie obiektu do bazy
    static add(league) {
        league.id = nextId++;
        leagueExtent.push(league);
        return league;
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return leagueExtent;
    }
    //edycja obiektu
    static edit(user) {

    }
    //usuwanie obiektu po id
    static delete(id) {
 
    } 
    //pobieranie obiektu do widoku szczegółów
    //może być potrzebne pobranie dodatkowych danych
    //np. przez złączenia JOIN w relacyjnej bazie danych
    static details(id) {
        //FIXME
    }
    //metoda resetuje stan bazy i dodaje rekordy testowe
    //przydatna do testów
    static initData() {
        //usuwamy zawartość tablicy
        leagueExtent.splice(0, leagueExtent.length);
        //resetujemy licznik id
        nextId = 1;
        League.add(new League('Fc Ponalewce', 1990, '2002-01-01', '2003-02-02'));
    }
}

League.initData();

module.exports = League;