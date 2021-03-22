
class MatchItem {
    id = 0;
    home = "123";
    odds = [];
}

class OddsItem {
    label = "";
    odds = 0;
    rangqiu = 0;
}

class OrderDetail {
    id = 0;
    matchData = {
        
    };

    constructor(data) {
        this.id = data.id;
        this.matchData = OrderDetail.getMatchData(data.matchData);
    }

    static getMatchData(data) {
        let obj = {};
        data.forEach(element => {
            let matchItem = new MatchItem();
            matchItem.id = element.id;
            matchItem.home = element.home;
            matchItem.odds = this.getOddsList(element.odds);
            obj[element.id] = matchItem;
        });
        return obj;
    }

    static getOdds(data) {
        let obj = {}
        obj.rangqiu = data.rangqiu;
        obj.oddsList = this.getOddsList(data.oddsList);
        return obj;
    }

    static getOddsList(data) {
        let obj = {};
        data.map((item, index) => {
            let oddsItem = new OddsItem();
            oddsItem.label = item.label;
            oddsItem.odds = item.odds;
            oddsItem.rangqiu = item.rangqiu;
            return obj[index] = {
                rangqiu: index,
                oddsList: oddsItem
            };
        })
        return obj;
    }
}

export default OrderDetail;