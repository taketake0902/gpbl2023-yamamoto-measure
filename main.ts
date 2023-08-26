OLED.init(128, 64)
let fine_dust = 0
let precipitation = 0
let temperature = 0
basic.forever(function () {
    fine_dust = Environment.ReadDust(DigitalPin.P16, AnalogPin.P1)
    precipitation = Environment.ReadDust(DigitalPin.P16, AnalogPin.P1)
    temperature = input.temperature()
    OLED.clear()
    OLED.writeStringNewLine("weather board")
    OLED.newLine()
    OLED.writeString("dust (ug/m3)")
    OLED.writeNumNewLine(fine_dust)
    OLED.writeString("water level")
    OLED.writeNumNewLine(precipitation)
    OLED.writeString("temperature")
    OLED.writeNumNewLine(temperature)
    basic.pause(1000)
})
