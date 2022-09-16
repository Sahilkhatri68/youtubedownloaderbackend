    var k_page = 'home';
    var g_token = '';
    var k_get_query = "";
    var k_data_vid = '';
    var k_data_vtitle = '';
    var k__id = '';
    var k_busy = false;
    var p_b = false;
    var k_analyze_url = "https:\/\/www.y2mate.com\/mates\/en370\/analyze\/ajax";
    var k_convert_url = "https:\/\/www.y2mate.com\/mates\/convert";
    var k_tmp_url = "\/_hl_\/";
    var wLocation = "\/";
    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    };
    var k_qs = parse_query_string(window.location.search.substring(1));