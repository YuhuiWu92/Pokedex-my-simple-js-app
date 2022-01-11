let pokemonRepository = function() {
    document.querySelector("#exampleModal");
    let t = [],
        e = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function n(e) { "object" == typeof e && "name" in e ? t.push(e) : console.log("incorrent Pokemon item") }

    function o(t) { let e = t.detailsUrl; return fetch(e).then(function(t) { return t.json() }).then(function(e) { t.imageUrl = e.sprites.front_default, t.height = e.height, t.weight = e.weight }).catch(function(t) { console.error(t) }) }

    function i(t) { o(t).then(function() { a(t) }) }

    function a(t) {
        let e = $(".modal-body"),
            n = $(".modal-title");
        n.empty(), e.empty();
        let o = $('<h1 class="text-capitalize">' + t.name + "</h1>"),
            i = $('<img class="modal-img" style="width:30%">');
        i.attr("src", t.imageUrl);
        let a = $("<p>Height : " + t.height + "</p>"),
            l = $("<p>Weight : " + t.weight + "</p>");
        n.append(o), e.append(i), e.append(a), e.append(l), $("#exampleModal").modal()
    }
    return $(document).ready(function() {
        $("#search-pokemon").on("input", function() {
            var t = $(this).val().toLowerCase();
            $(".btn").filter(function() { $(this).toggle($(this).text().toLowerCase().indexOf(t) > -1) })
        })
    }), {
        getAll: function() { return t },
        add: n,
        addListItem: function(t) {
            let e = document.querySelector(".pokemon-list"),
                n = document.createElement("li"),
                o = document.createElement("button"),
                a = document.createElement("img");
            o.innerText = t.name, o.classList.add("button"), o.classList.add("btn"), a.classList.add("btn-img"), o.appendChild(a), n.appendChild(o), e.appendChild(n), o.addEventListener("click", function() { i(t) });
            let l = t.detailsUrl;
            return fetch(l).then(function(t) { return t.json() }).then(function(e) { t.image = e.sprites.front_default, a.setAttribute("src", t.image) }).catch(function(t) { console.error(t) })
        },
        loadList: function() { return fetch(e).then(function(t) { return t.json() }).then(function(t) { t.results.forEach(function(t) { n({ name: t.name, detailsUrl: t.url }) }) }).catch(function(t) { console.error(t) }) },
        loadDetails: o,
        showDetails: i,
        showModal: a
    }
}();
pokemonRepository.loadList().then(function() { pokemonRepository.getAll().forEach(function(t) { pokemonRepository.addListItem(t) }) });