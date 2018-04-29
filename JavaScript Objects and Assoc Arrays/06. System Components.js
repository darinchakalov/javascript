function systemComponents(arrayOfStrings){
    let syscomp = new Map
    for (let row of arrayOfStrings){
        let [systemName,componentName,subcomponentNmae] = row.split(' | ')
        if(! syscomp.has(systemName)){
            syscomp.set(systemName, new Map)
        }
        if(! syscomp.get(systemName).has(componentName)){
            syscomp.get(systemName).set(componentName, [])
        }
        syscomp.get(systemName).get(componentName).push(subcomponentNmae)
    }
    let systemsSorted = Array.from(syscomp.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(syscomp.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            syscomp.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(syscomp.get(s1).size != syscomp.get(s2).size) {
            return syscomp.get(s2).size - syscomp.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return syscomp.get(system).get(c2).length - syscomp.get(system).get(c1).length;
    }

}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])