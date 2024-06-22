const fse = require('fs-extra');

function createMunicipalities() {
    data= `
        1.	Altivole	7.060	21,95	322	88
        2.	Arcade	4.496	8,27	543	61
        3.	Asolo	8.985	25,37	354	190
        4.	Borso del Grappa	5.928	33,14	179	279
        5.	Breda di Piave	7.676	25,76	298	23
        6.	Caerano di San Marco	7.788	12,09	644	124
        7.	Cappella Maggiore	4.614	11,09	416	115
        8.	Carbonera	11.219	19,88	564	18
        9.	Casale sul Sile	13.092	26,92	486	6
        10.	Casier	11.436	13,42	852	12
        11.	Castelcucco	2.333	8,79	265	189
        12.	Castelfranco Veneto	33.103	51,61	641	43
        13.	Castello di Godego	7.020	18,13	387	51
        14.	Cavaso del Tomba	2.930	18,97	154	248
        15.	Cessalto	3.792	28,18	135	5
        16.	Chiarano	3.584	19,92	180	6
        17.	Cimadolmo	3.374	17,90	189	32
        18.	Cison di Valmarino	2.386	28,81	83	261
        19.	Codognè	5.229	21,75	240	26
        20.	Colle Umberto	5.035	13,58	371	145
        21.	Conegliano	34.445	36,40	946	72
        22.	Cordignano	6.870	26,25	262	56
        23.	Cornuda	6.068	12,51	485	163
        24.	Crocetta del Montello	5.990	26,57	225	146
        25.	Farra di Soligo	8.539	28,34	301	163
        26.	Follina	3.568	24,08	148	191
        27.	Fontanelle	5.709	35,35	161	18
        28.	Fonte	6.045	14,60	414	107
        29.	Fregona	2.742	42,72	64	251
        30.	Gaiarine	5.822	28,78	202	20
        31.	Giavera del Montello	5.119	20,19	254	78
        32.	Godega di Sant'Urbano	6.007	24,34	247	52
        33.	Gorgo al Monticano	3.851	27,09	142	10
        34.	Istrana	9.126	26,48	345	42
        35.	Loria	9.246	23,25	398	70
        36.	Mansuè	4.961	27,09	183	13
        37.	Mareno di Piave	9.440	27,77	340	36
        38.	Maser	5.096	25,85	197	147
        39.	Maserada sul Piave	9.123	28,77	317	31
        40.	Meduna di Livenza	2.916	15,38	190	8
        41.	Miane	3.101	30,88	100	259
        42.	Mogliano Veneto	27.922	46,26	604	8
        43.	Monastier di Treviso	4.406	25,26	174	6
        44.	Monfumo	1.297	11,45	113	227
        45.	Montebelluna	31.281	49,01	638	109
        46.	Morgano	4.438	11,76	377	23
        47.	Moriago della Battaglia	2.811	13,76	204	119
        48.	Motta di Livenza	10.702	37,78	283	9
        49.	Nervesa della Battaglia	6.518	34,97	186	78
        50.	Oderzo	20.207	42,35	477	13
        51.	Ormelle	4.474	18,83	238	22
        52.	Orsago	3.793	10,71	354	44
        53.	Paese	22.147	38,09	581	32
        54.	Pederobba	7.354	27,32	269	174
        55.	Pieve del Grappa	6.656	37,34	178	300
        56.	Pieve di Soligo	11.595	19,02	610	132
        57.	Ponte di Piave	8.331	32,44	257	11
        58.	Ponzano Veneto	12.999	22,27	584	36
        59.	Portobuffolè	741	5,08	146	10
        60.	Possagno	2.296	12,11	190	276
        61.	Povegliano	5.079	12,91	393	56
        62.	Preganziol	16.808	23,11	727	12
        63.	Quinto di Treviso	10.058	19,04	528	17
        64.	Refrontolo	1.707	13,03	131	216
        65.	Resana	9.352	24,89	376	31
        66.	Revine Lago	2.088	18,79	111	246
        67.	Riese Pio X	10.944	30,64	357	65
        68.	Roncade	14.638	61,78	237	8
        69.	Salgareda	6.526	27,55	237	8
        70.	San Biagio di Callalta	12.681	48,50	261	10
        71.	San Fior	6.818	17,82	383	57
        72.	San Pietro di Feletto	5.117	19,25	266	221
        73.	San Polo di Piave	4.849	20,98	231	27
        74.	San Vendemiano	9.834	18,50	532	46
        75.	San Zenone degli E.	7.311	19,97	366	117
        76.	Santa Lucia di Piave	9.140	19,81	461	55
        77.	Sarmede	2.978	18,01	165	103
        78.	Segusino	1.812	18,23	99	219
        79.	Sernaglia della B.	6.068	20,15	301	117
        80.	Silea	10.488	18,95	553	7
        81.	Spresiano	12.350	25,72	480	56
        82.	Susegana	11.747	44,10	266	76
        83.	Tarzo	4.154	23,91	174	267
        84.	Trevignano	10.723	26,49	405	77
        85.	Treviso	85.282	55,58	1.534	15
        86.	Valdobbiadene	9.958	62,89	158	253
        87.	Vazzola	6.751	26,16	258	30
        88.	Vedelago	16.543	61,85	267	43
        89.	Vidor	3.647	13,43	272	152
        90.	Villorba	17.610	30,53	577	26
        91.	Vittorio Veneto	27.217	82,80	329	138
        92.	Volpago del Montello	10.050	44,82	224	94
        93.	Zenson di Piave	1.742	9,50	183	7
        94.	Zero Branco	11.643	26,06	447	18
        `;
    // Convert the data into an array of lines
    const lines = data.trim().split('\n');

    // Create an array of objects
    const municipalities = lines.map(line => {
        const parts = line.trim().split(/\s+/);
        const name = parts.slice(1, -4).join(' ');
        return { name };
    });

    // Save the array to a JSON file
    fse.writeJson('municipalities.json', municipalities, { spaces: 2 })
      .then(() => {
          console.log('Municipalities successfully saved in municipalities.json');
      })
      .catch(err => {
          console.error('Error saving municipalities:', err);
      });
}

module.exports = createMunicipalities;