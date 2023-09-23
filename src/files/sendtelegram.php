<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з форми
   $name = $_POST["name"];
   $phone = $_POST["phone"];
   $sizePrice = $_POST["size"];
   $color = $_POST["color"];
   
   $productTypeValue = $_POST["typeProduct"];
   // if ($productTypeValue === "1") {
   //    $productType = "Пончик";
   // } elseif ($productTypeValue === "2") {
   //    $productType = "Хмаринка пушиста";
   // } elseif ($productTypeValue === "3") {
   //    $productType = "Хмаринка меблева";
   // } elseif ($productTypeValue === "4") {
   //    $productType = "Автокресло";
   // }
   // $productTypeValue = $_POST["typeProduct"];
   // $colorValue = $_POST["color"];
   
   // if ($productTypeValue === "donut") {
   //    $productType = "Пончик";
   //    if ($colorValue === "caramel") {
   //       $color = "Карамель";
   //    } elseif ($colorValue === "cream") {
   //       $color = "Крем";
   //    } elseif ($colorValue === "gray") {
   //       $color = "Сірий";
   //    } elseif ($colorValue === "honey") {
   //       $color = "Медовий";
   //    } elseif ($colorValue === "pink") {
   //       $color = "Рожевий";
   //    } elseif ($colorValue === "brown") {
   //       $color = "Коричневий";
   //    }
   // } elseif ($productTypeValue === "cloud_fluffy") {
   //    $productType = "Хмаринка пушиста";
   //    if ($colorValue === "1") {
   //       $color = "Caramel";
   //    } elseif ($colorValue === "2") {
   //       $color = "Cream";
   //    }
   // } elseif ($productTypeValue === "mebel_cloud") {
   //    $productType = "Хмаринка меблева";
   //    // Додайте логіку обробки для інших значень color, якщо необхідно
   // } elseif ($productTypeValue === "4") {
   //    $productType = "Автокресло";
   //    // Додайте логіку обробки для інших значень color, якщо необхідно
   // }
   
   // Налаштування Telegram-бота
   $botToken = "6326698251:AAG4khK9I-svNecAgxBSln9_g1UijVHI-6Y";
   $chatId = "-977034876";

   
   // Отримання ціни та назви кольору з форми
   // $price = "";
   // $colorName = "";

   // if ($size == "S") {
   //    $price = "300";
   // } elseif ($size == "M") {
   //    $price = "380";
   // } elseif ($size == "L") {
   //    $price = "450";
   // }

   // if ( $productType = "Пончик";) {
   //    $colorName = "Gray";
   // } elseif ($color == "2") {
   //    $colorName = "Rufous";
   // } elseif ($color == "3") {
   //    $colorName = "Vanila";
   // } elseif ($color == "4") {
   //    $colorName = "Beige";
   // } elseif ($color == "5") {
   //    $colorName = "Mocha";
   // } elseif ($color == "6") {
   //    $colorName = "Pink";
   // }

   // Формування повідомлення
   $message = "<b>Нове замовлення</b>\n";
   $message .= "<b>Ім'я:</b> $name\n";
   $message .= "<b>Телефон:</b> $phone\n";
   $message .= "<b>Тип товару:</b> $productTypeValue\n";
   $message .= "<b>Колір:</b> $color\n";
   $message .= "<b>Розмір та ціна:</b> $sizePrice\n";
   // $message .= "<b>Ціна:</b> $price\n";

   // Відправка повідомлення в Telegram
   $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
   $params = [
      "chat_id" => $chatId,
      "parse_mode" => "HTML",
      "text" => $message,
   ];

   $ch = curl_init($url);
   curl_setopt($ch, CURLOPT_POST, 1);
   curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   $response = curl_exec($ch);
   curl_close($ch);

   if ($response) {
      header("Location: https://warzone.org.ua/dist/product.html#message");
      exit();
   } else {
      header("Location: https://warzone.org.ua/dist/product.html");
      exit();
   }
}
?>
