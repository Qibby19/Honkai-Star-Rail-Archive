<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Honkai Star Rail Archive</title>
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png">
    <link rel="stylesheet" href="../../../css/save.css">
</head>

<body>
    <header>
        <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><a href="../../home/home.php">HOME</a></li>
                <li><a href="../calculatormenu.php">TOOLS</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <?php
        $atkv = $_GET["saveatk"];
        $spdv = $_GET["savespd"];
        $critv = $_GET["savecrit"];
        $fdbv = $_GET["savefdb"];
        $batkv = $_GET["savebatk"];
        $skillv = $_GET["saveskill"];
        $ultv = $_GET["saveult"];

        //connect to MySQL
        $db = mysqli_connect('localhost', 'root', '') or die('Unable to connect. Check your connection parameters.');

        //create the main database if it doesn't already exist
        $query = 'CREATE DATABASE IF NOT EXISTS chardata';

        //make sure our recently created database is the active one
        mysqli_select_db($db, 'chardata') or die(mysqli_error($db));

        $query = 'INSERT INTO himeko
            (save_name, save_atkv, save_spdv, save_critv, save_fdbv, save_batkv, save_skillv, save_ultv)
        VALUES
            ("'.$_GET['name'].'", '.$atkv.', '.$spdv.', '.$critv.', '.$fdbv.', '.$batkv.', '.$skillv.', '.$ultv.')';
        mysqli_query($db, $query) or die(mysqli_error($db));
        ?>

        <div class="content">
            Saved at <?php echo $_GET["name"]; ?>
        </div>
        <div class="back">
            <a class="backb" href="himeko.php">Confirm</a>
        </div>

    </main>
</body>

</html>