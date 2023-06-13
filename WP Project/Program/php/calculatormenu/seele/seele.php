<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Honkai Star Rail Archive</title>
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png">
    <link rel="stylesheet" href="../../../css/damagecal.css">
    <script type="text/javascript" src="../../../javascript/limiter.js" defer></script>
    <script type="text/javascript" src="../../../javascript/calculatorseele.js" defer></script>
    <script type="text/javascript" src="../../../javascript/savewindowseele.js" defer></script>
    <script type="text/javascript" src="../../../javascript/loadwindow.js" defer></script>
    <script type="text/javascript" src="../../../javascript/loadprocessseele.js" defer></script>
</head>

<body>
    <header>
        <div class="logo">
            <a href="../../home/home.php"><img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png" alt="Logo"></a>
        </div>
        <nav>
            <ul>
                <li><a href="../../home/home.php">HOME</a></li>
                <li><a href="../calculatormenu.php">TOOLS</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div class="back">
            <a href="../calculatormenu.php">Back</a>
        </div>
        <h2>Damage Calculator</h2>
        <div class="content1">
            <div class="charimg">
                <img src="https://starrailstation.com/assets/8f89a52834113ea934be4d34a18b8971f3696aec1862a6e89933416570b99eb3.webp">
            </div>
            <div class="stats">
                <ul>
                    <li>ATK</li>
                    <input class="atk" id="atk" type="number" value="0" onchange="basicseele();skillseele();ultseele()" />
                    <li>SPD</li>
                    <input class="spd" id="spd" type="number" value="0" onchange="basicseele();skillseele();ultseele()" />
                    <li>CRIT DMG</li>
                    <span><input class="crit" id="crit" type="number" value="50" onchange="basicseele();skillseele();ultseele()" />%</span>
                    <li>Quantum DMG Boost</li>
                    <span><input class="qdb" id="qdb" id="class" type="number" value="0" onchange="basicseele();skillseele();ultseele()" />%</span>
                </ul>
            </div>
        </div>
        <div class="content2">
            <div class="calc">
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/3dc25766cb3a1542f3656de8afd55add0ef6132135d3d4fde192a407dfd7afba.webp">
                    <span class="input"><input class="batk" id="batk" name="batk" type="number" min="1" max="9" value="1" oninput="limiter(this)" onchange="basicseele()" />/9</span>
                    <span class="text">Basic ATK</span>
                </div>
                <div class="rightside">
                    <li>NON-CRIT</li>
                    <input class="nocritbatk" id="nocritbatk" type="number" readonly disabled value="0" />
                    <li>CRIT</li>
                    <input class="critbatk" id="critbatk" type="number" readonly disabled value="0" />
                </div>
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/7d8e04366bec92333d73088ac5a764859e6cd4639b9eef39d2ba0d992db888ff.webp">
                    <span class="input"><input class="skill" id="skill" name="skill" type="number" min="1" max="15" value="1" oninput="limiter(this)" onchange="skillseele()" />/15</span>
                    <span class="text">Skill</span>
                </div>
                <div class="rightside">
                    <li>NON-CRIT</li>
                    <input class="nocritskill" id="nocritskill" type="number" readonly disabled value="0" />
                    <li>CRIT</li>
                    <input class="critskill" id="critskill" type="number" readonly disabled value="0" />
                </div>
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/0b58694d637f21bd32a46d37b23baf1f2e502f0761bab031c7cfed8f9aed3d6e.webp">
                    <span class="input"><input class="ult" id="ult" name="ult" type="number" min="1" max="15" value="1" oninput="limiter(this)" onchange="ultseele()" />/15</span>
                    <span class="text">Ultimate</span>
                </div>
                <div class="rightside">
                    <li>NON-CRIT</li>
                    <input class="nocritult" id="nocritult" type="number" readonly disabled value="0" />
                    <li>CRIT</li>
                    <input class="critult" id="critult" type="number" readonly disabled value="0" />
                </div>
            </div>
        </div>
        <div class="content3">
            <button class="buttonsave" id="buttonsave">Save Data</button>
            <button class="buttonload" id="buttonload">Load Data</button>
        </div>

        <div id="savemodal" class="savemodal">

            <div class="savemodalc">
                <span class="saveclose">&times;</span>
                <h4>Enter the save name</h4>
                <form action="seelesave.php" method="get">
                    <ul>
                        <li>ATK <input class="saveatk" id="saveatk" type="number" name="saveatk" readonly></li>
                        <li>SPD <input class="savespd" id="savespd" type="number" name="savespd" readonly></li>
                        <li>CRIT DMG <input class="savecrit" id="savecrit" type="number" name="savecrit" readonly></li>
                        <li>Quantum DMG Boost <input class="saveqdb" id="saveqdb" type="number" name="saveqdb" readonly></li>
                        <li>Basic ATK LVL <input class="savebatk" id="savebatk" type="number" name="savebatk" readonly></li>
                        <li>Skill LVL <input class="saveskill" id="saveskill" type="number" name="saveskill" readonly></li>
                        <li>Ult LVL <input class="saveult" id="saveult" type="number" name="saveult" readonly></li>
                    </ul>
                    <input class="savename" type="text" name="name">
                    <input class="buttonsavec" type="submit">
                </form>
            </div>

        </div>
        <div id="loadmodal" class="loadmodal">

            <div class="loadmodalc">
                <span class="loadclose">&times;</span>
                <h4>Choose file</h4>
                <div class="getstuff">
                    <table border="0" cellpadding="1" cellspacing="1" style="width: 100%; margin-left: auto; margin-right: auto;">
                        <tr>
                            <th>Save name</th>
                            <th></th>
                        </tr>

                        <?php
                        //connect to MySQL
                        $db = mysqli_connect('localhost', 'root', '') or die('Unable to connect. Check your connection parameters.');

                        //create the main database if it doesn't already exist
                        $query = 'CREATE DATABASE IF NOT EXISTS chardata';

                        //make sure our recently created database is the active one
                        mysqli_select_db($db, 'chardata') or die(mysqli_error($db));

                        $query = 'SELECT
                        save_id, save_name, save_atkv, save_spdv, save_critv, save_qdbv, save_batkv, save_skillv, save_ultv
                    FROM
                        seele
                    ORDER BY
                        save_id';

                        $result = mysqli_query($db, $query) or die(mysqli_error($db));


                        // show the results
                        while ($row = mysqli_fetch_assoc($result)) {
                            extract($row);
                            echo '<tr>';
                            echo '<td>' . $save_name . '</td>';
                            echo '<td>' . '<button class="buttonloadc" id="buttonloadc" onclick="loaddata('.$save_atkv.','.$save_spdv.','.$save_critv.','.$save_qdbv.','.$save_batkv.','.$save_skillv.','.$save_ultv.')">Load Data</button>' . '</td>';
                            echo '</tr>';

                            echo '<br/>';
                        }

                        ?>
                    </table>
                </div>
            </div>

        </div>
    </main>
</body>

</html>