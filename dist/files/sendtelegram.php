<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Отримання даних з форми
   $name = $_POST["name"];
   $phone = $_POST["phone"];
   $sizePrice = $_POST["size"];
   $color = $_POST["color"];
   $productTypeValue = $_POST["typeProduct"];
   $namePage = $_POST['namePage'];
   $linkPage = $_POST['linkPage'];
   // Налаштування Telegram-бота
   $botToken = "6676581966:AAFzygVUgqxYX6ipTiplo8KeC3YLJT40emw";
   $chatId = "-4023788897";

   // Формування повідомлення
   $message = "<b>Нове замовлення</b>\n";
   $message .= "<b>Ім'я:</b> $name\n";
   $message .= "<b>Телефон:</b> $phone\n";
   $message .= "<b>Тип товару:</b> $productTypeValue\n";
   $message .= "<b>Колір:</b> $color\n";
   $message .= "<b>Розмір та ціна:</b> $sizePrice\n";
   $message .= "<b>Сторінка з якої замовили:</b> $linkPage\n";

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
      header("Location: https://darlingstore.com.ua/$namePage#message");
      exit();
   } else {
      header("Location: https://darlingstore.com.ua/$namePage#message-error");
      exit();
   }
}
?>
