import { zonearr } from "./zones.js"
import { x } from "./shapes.js"
import { player } from "./player.js"
import { drawX } from "./draw.js"
import { getWinner } from "./gameover.js"
import { compMove } from "./compMove.js"

export let over = false

export const comp = {
    findZone(){
        let zonesO = []
        let zonesX = []

        for(const zone of zonearr){
            const index = zonearr.indexOf(zone)
            if(zone.draw.o) zonesO.push(index)
            if(zone.draw.x) zonesX.push(index)
        }
        
        if(compMove(zonesX)) return compMove(zonesX)
        if(compMove(zonesO)) return compMove(zonesO)

        if(!zonearr[4].placed) return zonearr[4]
        else for(const zone of zonearr) if(!zone.placed) return zone
        over = true
    },
    
    push(ctx){
        let zone = this.findZone()
        if(zone && !zone.placed && !player.turn){
            const newX = new x()
            newX.x = zone.cx
            newX.y = zone.cy
            drawX.push(newX)
            zone.placed = true
            zone.draw.x = true
            player.turn = true
        }
        getWinner(ctx)
    }
}