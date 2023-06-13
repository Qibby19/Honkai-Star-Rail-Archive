<html>

<head>
    <title>data</title>
</head>

<body>
    <?php
    //connect to MySQL
    $db = mysqli_connect('localhost', 'root', '') or die('Unable to connect. Check your connection parameters.');

    //create the main database if it doesn't already exist
    $query = 'CREATE DATABASE IF NOT EXISTS chardata';

    //make sure our recently created database is the active one
    mysqli_select_db($db, 'chardata') or die(mysqli_error($db));

    //create the table
    $query = 'CREATE TABLE seele (
        save_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
        save_name VARCHAR(255) NOT NULL,
        save_atkv INT UNSIGNED NOT NULL DEFAULT 0,
        save_spdv INT UNSIGNED NOT NULL DEFAULT 0,
        save_critv INT UNSIGNED NOT NULL DEFAULT 0,
        save_qdbv INT UNSIGNED NOT NULL DEFAULT 0,
        save_batkv TINYINT UNSIGNED NOT NULL DEFAULT 0,
        save_skillv TINYINT UNSIGNED NOT NULL DEFAULT 0,
        save_ultv TINYINT UNSIGNED NOT NULL DEFAULT 0,
        PRIMARY KEY (save_id)
    )
    ENGINE=MyISAM';
    mysqli_query($db, $query) or die(mysqli_error($db));

    /*$query = 'INSERT INTO seele
            (save_id, save_name, save_atkv, save_spdv, save_critv, save_qdbv, save_batkv, save_skillv, save_ultv)
        VALUES
            (1, "testdata", 1000, 110, 100, 25, 1, 3, 4)';
    mysqli_query($db, $query) or die(mysqli_error($db));*/

    /*$query = 'ALTER TABLE seele AUTO_INCREMENT = 1';
    mysqli_query($db, $query) or die(mysqli_error($db));*/

    echo 'Data is done!';
    ?>
</body>

</html>