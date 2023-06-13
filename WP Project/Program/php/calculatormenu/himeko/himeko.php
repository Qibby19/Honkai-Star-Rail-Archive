<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Honkai Star Rail Archive</title>
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png">
    <link rel="stylesheet" href="../../../css/damagecal.css">
    <script type="text/javascript" src="../../../javascript/limiter.js" defer></script>
    <script type="text/javascript" src="../../../javascript/calculatorhimeko.js" defer></script>
    <script type="text/javascript" src="../../../javascript/savewindowhimeko.js" defer></script>
    <script type="text/javascript" src="../../../javascript/loadwindow.js" defer></script>
    <script type="text/javascript" src="../../../javascript/loadprocesshimeko.js" defer></script>
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
                <img src="https://starrailstation.com/assets/14e7dc67afb1c8f570d3ad758e00f46d4af48d45df69c990b19bddc3542aaed6.webp">
            </div>
            <div class="stats">
                <ul>
                    <li>ATK</li>
                    <input class="atk" id="atk" type="number" value="0" onchange="basichimeko();skillhimeko();ulthimeko()" />
                    <li>SPD</li>
                    <input class="spd" id="spd" type="number" value="0" onchange="basichimeko();skillhimeko();ulthimeko()" />
                    <li>CRIT DMG</li>
                    <span><input class="crit" id="crit" type="number" value="50" onchange="basichimeko();skillhimeko();ulthimeko()" />%</span>
                    <li>Fire DMG Boost</li>
                    <span><input class="fdb" id="fdb" id="class" type="number" value="0" onchange="basichimeko();skillhimeko();ulthimeko()" />%</span>
                </ul>
            </div>
        </div>
        <div class="content2">
            <div class="calc">
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/c764b76e7c99a259342a9d96a8a9fc7c083b1f384e373728056542d739a8bcab.webp">
                    <span class="input"><input class="batk" id="batk" name="batk" type="number" min="1" max="9" value="1" oninput="limiter(this)" onchange="basicseele()" />/9</span>
                    <span class="text">Basic ATK</span>
                </div>
                <div class="rightside">
                    <li>NON-CRIT (main)</li>
                    <input class="nocritbatk" id="nocritbatk" type="number" readonly disabled value="0" />
                    <li>CRIT (main)</li>
                    <input class="critbatk" id="critbatk" type="number" readonly disabled value="0" />
                </div>
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/5c982a8f28ad33032c816edd19a6ffcb045f192388775904ccd0a2dabef4e53c.webp">
                    <span class="input"><input class="skill" id="skill" name="skill" type="number" min="1" max="15" value="1" oninput="limiter(this)" onchange="skillseele()" />/15</span>
                    <span class="text">Skill</span>
                </div>
                <div class="rightside">
                    <li>NON-CRIT (main)</li>
                    <input class="nocritskill" id="nocritskill" type="number" readonly disabled value="0" />
                    <li>CRIT (main)</li>
                    <input class="critskill" id="critskill" type="number" readonly disabled value="0" />
                    <li>NON-CRIT (side)</li>
                    <input class="nocritskill2" id="nocritskill2" type="number" readonly disabled value="0" />
                    <li>CRIT (side)</li>
                    <input class="critskill2" id="critskill2" type="number" readonly disabled value="0" />
                </div>
                <div class="leftside">
                    <img src="https://starrailstation.com/assets/f64c9f06886344957e3dad6f07fd54f276f64fd7a8a136e7fdfc47aa5a3a07ab.webp">
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
                <form action="himekosave.php" method="get">
                    <ul>
                        <li>ATK <input class="saveatk" id="saveatk" type="number" name="saveatk" readonly></li>
                        <li>SPD <input class="savespd" id="savespd" type="number" name="savespd" readonly></li>
                        <li>CRIT DMG <input class="savecrit" id="savecrit" type="number" name="savecrit" readonly></li>
                        <li>Fire DMG Boost <input class="savefdb" id="savefdb" type="number" name="savefdb" readonly></li>
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
                        save_id, save_name, save_atkv, save_spdv, save_critv, save_fdbv, save_batkv, save_skillv, save_ultv
                    FROM
                        himeko
                    ORDER BY
                        save_id';

                        $result = mysqli_query($db, $query) or die(mysqli_error($db));


                        // show the results
                        while ($row = mysqli_fetch_assoc($result)) {
                            extract($row);
                            echo '<tr>';
                            echo '<td>' . $save_name . '</td>';
                            echo '<td>' . '<button class="buttonloadc" id="buttonloadc" onclick="loaddata('.$save_atkv.','.$save_spdv.','.$save_critv.','.$save_fdbv.','.$save_batkv.','.$save_skillv.','.$save_ultv.')">Load Data</button>' . '</td>';
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