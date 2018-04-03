const ratio = 2;
const fontFamily = "PingFangSC-Regular, 'Microsoft YaHei', sans-serif";
const backupFont = "'Microsoft YaHei', sans-serif";
export const couponConfig = [
  {
      name: '1',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 104 * ratio,
      },
      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 165 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 170 * ratio,
              y: 10 * ratio + 16 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 16 * ratio,
          height: 16 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 148 * ratio,
              y: 12 * ratio,
          },
          box: {
              position: {
                  x: 145 * ratio,
                  y: 10 * ratio
              },
              radius: 10.5 * ratio,
              // backgroundColor: '#ccc'
          }
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'baseline',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 34 * ratio,
              y: 33 * ratio + 28 * ratio,
          }
      },
      discountPct: {
          hAlign: 'center',
          vAlign: 'baseline',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 34 * ratio,
              y: 33 * ratio + 28 * ratio,
          }
      },

      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 18 * ratio,
          width: 190 * ratio,
          color: "#000",
          position: {
              x: 146 * ratio,
              y: 40 * ratio + 18 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'top',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 43 * ratio,
          color: "rgba(255,255,255,0.8)",
          position: {
              x: 44 * ratio,
              y: 9 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          color: "rgba(0,0,0,0.8)",
          position: {
              x: 145 * ratio,
              y: 75 * ratio + 12 * ratio,
          }
      },

      lowLimitAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 108 * ratio,
          color: "rgba(255,255,255,0.8)",
          position: {
              x: 13 * ratio,
              y: 81 * ratio + 14 * ratio,
          }
      },

      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 50 * ratio,
          // color: "rgba(255,255,255,0.8)",
          position: {
              x: 282 * ratio,
              y: 73 * ratio + 14 * ratio,
          },

          box: {
              position: {
                  x: 270 * ratio,
                  y: 42 * ratio + 27 * ratio
              },
              width: 73 * ratio,
              height: 27 * ratio,
              fill: false,
              radius: 15 * ratio,
              // backgroundColor: "#fff",
              borderWidth: 1 * ratio,
              // borderColor:
              borderAlpha: 0.58
          }
      },



  },
  {
      name: '2',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 104 * ratio,
      },

      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 182 * ratio,
          color: "rgba(255,255,255,0.8)",
          position: {
              x: 41 * ratio,
              y: 10 * ratio + 14 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 18 * ratio,
          height: 18 * ratio,
          // color: "transparent",
          position: {
              x: 19 * ratio,
              y: 8 * ratio,
          },
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 32 * ratio,
              y: 32 * ratio + 28 * ratio - 2 * ratio,
          }
      },
      discountPct: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 32 * ratio,
              y: 32 * ratio + 28 * ratio - 2 * ratio,
          }
      },

      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 18 * ratio,
          width: 127 * ratio,
          color: "#fff",
          position: {
              x: 32 * ratio + 56 * ratio + 5 * ratio,
              y: 39 * ratio + 18 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 38 * ratio,
          //color: "transparent",
          position: {
              x: 42 * ratio,
              y: 64 * ratio + 12 * ratio + 2 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          color: "rgba(255,255,255,0.5)",
          position: {
              x: 19 * ratio,
              y: 83 * ratio + 13 * ratio,
          }
      },

      lowLimitAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 127 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 98 * ratio,
              y: 62 * ratio + 14 * ratio,
          }
      },

      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 52 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 282 * ratio,
              y: 48 * ratio + 14 * ratio,
          },

          box: {
              position: {
                  x: 270 * ratio,
                  y: 42 * ratio
              },
              width: 73 * ratio,
              height: 27 * ratio,
              fill: false,
              radius: 15 * ratio,
              // backgroundColor: "#fff",
              borderWidth: 1 * ratio,
              // borderColor:
              // borderAlpha: 0 * ratio.58
          }
      },

  },
  {
      name: '3',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 104 * ratio,
      },

      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 92 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 35 * ratio,
              y: 9 * ratio + 14 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 18 * ratio,
          height: 18 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 13 * ratio,
              y: 8 * ratio,
          },
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 24 * ratio,
              y: 38 * ratio + 28 * ratio,
          },
          fitMethod: "not-box"
      },
      discountPct: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 28 * ratio,
          width: 56 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 24 * ratio,
              y: 38 * ratio + 28 * ratio,
          },
          fitMethod: "not-box"
      },

      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 18 * ratio,
          width: 127 * ratio,
          color: "#000",
          position: {
              x: 110 * ratio,
              y: 43 * ratio + 18 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 38 * ratio,
          color: "#666",
          position: {
              x: 193 * ratio,
              y: 10 * ratio + 17 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          color: "#999",
          position: {
              x: 110 * ratio,
              y: 71 * ratio + 13 * ratio,
          },
          fitMethod: "not-box"
      },

      lowLimitAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 66 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 24 * ratio,
              y: 70 * ratio + 14 * ratio,
          },
      },

      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 52 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 282 * ratio,
              y: 48 * ratio + 14 * ratio,
          },

          // box: {
          //   position: {
          //     x: 270 * ratio,
          //     y: 42 * ratio
          //   },
          //   width: 73 * ratio,
          //   height: 27 * ratio,
          //   fill: false,
          //   // radius: 15 * ratio,
          //   backgroundColor: "transparent",
          //   // borderWidth: 1 * ratio,
          //   // borderColor:
          //   // borderAlpha: 0 * ratio.58
          // }
      },

  },
  {
      name: '4',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 133 * ratio,
      },

      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 170 * ratio,
          color: "#8C8C8C",
          position: {
              x: 49 * ratio,
              y: 99 * ratio + 17 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 16 * ratio,
          height: 16 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 22 * ratio,
              y: 100 * ratio,
          },
          box: {
              position: {
                  x: 19 * ratio,
                  y: 98 * ratio
              },
              radius: 10.5 * ratio,
              // backgroundColor: '#ccc'
          }
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: " " + backupFont,
          fontSize: 28 * ratio,
          width: 64 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 20 * ratio,
              y: 15 * ratio + 28 * ratio,
          },
          fitMethod: "not-box"
      },
      discountPct: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: " " + backupFont,
          fontSize: 28 * ratio,
          width: 64 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 20 * ratio,
              y: 15 * ratio + 28 * ratio,
          },
          fitMethod: "not-box"
      },

      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 20 * ratio,
          width: 140 * ratio,
          color: "#fff",
          position: {
              x: 170 * ratio,
              y: 7 * ratio + 35 * ratio - 3 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 43 * ratio,
          //color: "transparent",
          position: {
              x: 116 * ratio,
              y: 19 * ratio + 17 * ratio + 2 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 121 * ratio,
              y: 56 * ratio + 14 * ratio,
          },
          fitMethod: "not-box"
      },

      lowLimitAmount: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 75 * ratio,
          color: "rgba(255,255,255,1)",
          position: {
              x: 20 * ratio,
              y: 56 * ratio + 14 * ratio,
          }
      },
      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 52 * ratio,
          color: "#000",
          position: {
              x: 276 * ratio,
              y: 99 * ratio + 14 * ratio,
          },

          // box: {
          //   position: {
          //     x: 270 * ratio,
          //     y: 42 * ratio
          //   },
          //   width: 73 * ratio,
          //   height: 27 * ratio,
          //   fill: false,
          //   // radius: 15 * ratio,
          //   backgroundColor: "transparent",
          //   // borderWidth: 1 * ratio,
          //   // borderColor:
          //   // borderAlpha: 0 * ratio.58
          // }
      },
  },
  {
      name: '5',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 104 * ratio,
      },

      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 102 * ratio,
          // color: "rgba(255,255,255,0.8)",
          position: {
              x: 153 * ratio,
              y: 18 * ratio + 17 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 16 * ratio,
          height: 16 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 130 * ratio,
              y: 20 * ratio,
          },
          box: {
              position: {
                  x: 128 * ratio,
                  y: 18 * ratio
              },
              radius: 10 * ratio,
              // backgroundColor: '#ccc'
          }
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 36 * ratio,
          width: 56 * ratio,
          // color: "rgba(255,255,255,1)",
          position: {
              x: 32 * ratio,
              y: 29 * ratio + 34 * ratio,
          }
      },
      discountPct: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 36 * ratio,
          width: 56 * ratio,
          // color: "rgba(255,255,255,1)",
          position: {
              x: 32 * ratio,
              y: 29 * ratio + 34 * ratio,
          }
      },

      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 18 * ratio,
          width: 127 * ratio,
          // height: 18 * ratio,
          // color: "#fff",
          position: {
              x: 129 * ratio,
              y: 48 * ratio + 18 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 46 * ratio,
          //color: "transparent",
          position: {
              x: 283 * ratio,
              y: 20 * ratio + 17 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          // height: 14 * ratio,
          // color: "rgba(255,255,255,0.5)",
          position: {
              x: 130 * ratio,
              y: 75 * ratio + 14 * ratio,
          }
      },

      lowLimitAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 75 * ratio,
          // height: 14 * ratio,
          // color: "rgba(255,255,255,1)",
          position: {
              x: 30 * ratio,
              y: 67 * ratio + 14 * ratio,
          }
      },

      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 52 * ratio,
          // color: "#000",
          position: {
              x: 290 * ratio,
              y: 50 * ratio + 14 * ratio,
          },
          multi: {
              wordsNum: 2,
              lineHeight: 14 * ratio
          }

          // box: {
          //   position: {
          //     x: 270 * ratio,
          //     y: 42 * ratio
          //   },
          //   width: 73 * ratio,
          //   height: 27 * ratio,
          //   fill: false,
          //   // radius: 15 * ratio,
          //   backgroundColor: "transparent",
          //   // borderWidth: 1 * ratio,
          //   // borderColor:
          //   // borderAlpha: 0 * ratio.58
          // }
      },

  },
  {
      name: '6',//to set
      // imageUrl: '21@2x.png',
      size: {
          width: 354 * ratio,
          height: 104 * ratio,
      },

      companyName: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 170 * ratio,
          color: "#000",
          position: {
              x: 39 * ratio,
              y: 11 * ratio + 17 * ratio,
          }
      },
      companyIcon: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 16 * ratio,
          height: 16 * ratio,
          color: "rgba(0,0,0,1)",
          position: {
              x: 17 * ratio,
              y: 13 * ratio,
          },
          box: {
              position: {
                  x: 14 * ratio,
                  y: 10 * ratio
              },
              radius: 10.5 * ratio,
              // backgroundColor: '#ccc'
          }
      },

      nominalAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: "DINAlternate-Bold " + backupFont,
          fontSize: 50 * ratio,
          width: 72 * ratio,
          // color: "rgba(255,255,255,1)",
          position: {
              x: 261 * ratio,
              y: 10 * ratio + 50 * ratio,
          },
          // fitMethod: "not-box"
      },
      discountPct: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: "DINAlternate-Bold " + backupFont,
          fontSize: 50 * ratio,
          width: 72 * ratio,
          // color: "rgba(255,255,255,1)",
          position: {
              x: 261 * ratio,
              y: 10 * ratio + 50 * ratio,
          },
          // fitMethod: "not-box"
      },
      subject: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: "DINAlternate-Bold",
          fontSize: 20 * ratio,
          width: 142 * ratio,
          color: "#000",
          position: {
              x: 17 * ratio,
              y: 48 * ratio + 20 * ratio,
          }
      },

      couponType: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 38 * ratio,
          // height: 17 * ratio,
          color: "#fff",
          position: {
              x: 166 * ratio,
              y: 47 * ratio + 17 * ratio - 2 * ratio,
          }
      },

      dateRange: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 131 * ratio,
          color: "#666",
          position: {
              x: 90 * ratio,
              y: 81 * ratio + 12 * ratio,
          },
      },

      lowLimitAmount: {
          hAlign: 'center',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 12 * ratio,
          width: 75 * ratio,
          color: "#666",
          position: {
              x: 14 * ratio,
              y: 81 * ratio + 14 * ratio - 2 * ratio,
          },
      },

      action: {
          hAlign: 'left',
          vAlign: 'bottom',
          fontName: fontFamily,
          fontSize: 14 * ratio,
          width: 52 * ratio,
          color: "#000",
          position: {
              x: 270 * ratio,
              y: 76 * ratio + 14 * ratio,
          },

          // box: {
          //   position: {
          //     x: 270 * ratio,
          //     y: 42 * ratio
          //   },
          //   width: 73 * ratio,
          //   height: 27 * ratio,
          //   fill: false,
          //   // radius: 15 * ratio,
          //   backgroundColor: "transparent",
          //   // borderWidth: 1 * ratio,
          //   // borderColor:
          //   // borderAlpha: 0 * ratio.58
          // }
      },

  },
];