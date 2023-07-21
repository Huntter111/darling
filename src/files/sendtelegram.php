<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з форми
   $name = $_POST["name"];
   $phone = $_POST["phone"];
   $size = $_POST["size"];
   $color = $_POST["color"];
   
   $productTypeValue = $_POST["typeProduct"];
   if ($productTypeValue === "1") {
      $productType = "Пончик";
   } elseif ($productTypeValue === "2") {
      $productType = "Прямокутник";
   } elseif ($productTypeValue === "3") {
      $productType = "Лежак в машину";
   } elseif ($productTypeValue === "4") {
      $productType = "Інший лежак";
   }
   $price = 0;
   // Пончик
   if ($productType === "Пончик") {
      if ($size === "S") {
         $price = 300;
      } elseif ($size === "M") {
         $price = 380;
      } elseif ($size === "L") {
         $price = 450;
      }
   }
   // Прямокутник
   if ($productType === "Прямокутник") {
      if ($size === "S") {
         $price = 1300;
      } elseif ($size === "M") {
         $price = 1380;
      } elseif ($size === "L") {
         $price = 1450;
      }
   }
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

   // if ($color == "1") {
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
   $message .= "<b>Розмір:</b> $size\n";
   $message .= "<b>Колір:</b> $color\n";
   $message .= "<b>Ціна:</b> $price\n";
   $message .= "<b>Тип товару:</b> $productType";

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
      header("Location: https://warzone.org.ua/tournament.html#thank-you");
      exit();
   } else {
      header("Location: https://warzone.org.ua/tournament.html#thank-you-error");
      exit();
   }
}


// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Отримання даних з форми
//    $name = $_POST["name"];
//    $phone = $_POST["phone"];
//    $size = $_POST["size"];
//    $color = $_POST["color"];

//    // Налаштування Telegram-бота
//    $botToken = "6326698251:AAG4khK9I-svNecAgxBSln9_g1UijVHI-6Y";
//    $chatId = "-977034876";

//    // Отримання ціни та типу товару з форми
//    $price = "";
//    $colorValue = "";

//    if ($size == "S") {
//       $price = "300";
//    } elseif ($size == "M") {
//       $price = "380";
//    } elseif ($size == "L") {
//       $price = "450";
//    }

   // if ($colorValue == "1") {
   //    $color = "Gray";
   // } elseif ($colorValue == "2") {
   //    $color = "Rufous";
   // } elseif ($colorValue == "3") {
   //    $color = "Vanila";
   // } elseif ($colorValue == "4") {
   //    $color = "Beige";
   // } elseif ($colorValue == "5") {
   //    $color = "Mocha";
   // } elseif ($colorValue == "6") {
   //    $color = "Pink";
   // }

   // Формування повідомлення
//    $message = "<b>Замовлення</b>\n";
//    $message .= "<b>Розмір:</b> $size\n";
//    $message .= "<b>Ім'я:</b> $name\n";
//    $message .= "<b>Телефон:</b> $phone\n";
//    $message .= "<b>Колір:</b> $color\n";
//    $message .= "<b>Ціна:</b> $price\n";
//    $message .= "<b>Тип товару:</b> $productType";

//    // Відправка повідомлення в Telegram
//    $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
//    $params = [
//       "chat_id" => $chatId,
//       "parse_mode" => "HTML",
//       "text" => $message,
//    ];

//    $ch = curl_init($url);
//    curl_setopt($ch, CURLOPT_POST, 1);
//    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
//    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//    $response = curl_exec($ch);
//    curl_close($ch);

//    if ($response) {
//       header("Location: https://warzone.org.ua/tournament.html#thank-you");
//       exit();
//    } else {
//       header("Location: https://warzone.org.ua/tournament.html#thank-you-error");
//       exit();
//    }
// }

?>
